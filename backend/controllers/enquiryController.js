import { validationResult } from "express-validator";
import { Enquiry } from "../models/Enquiry.js";
import { sendEnquiryEmail } from "../services/emailService.js";

/**
 * POST /api/enquiry
 * Create a new enquiry and persist it to MongoDB.
 */
export async function createEnquiry(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: "Validation failed. Please check the fields and try again.",
      errors: errors.array().map((e) => ({
        field: e.path,
        message: e.msg,
      })),
    });
  }

  try {
    const { name, phone, category, service, message } = req.body;

    const enquiry = await Enquiry.create({
      name: name.trim(),
      phone: phone.trim(),
      category: category?.trim() || "General",
      service: service?.trim() || "",
      message: message?.trim() || "",
    });

    // Send email notification (doesn't stop enquiry from being saved)
    try {
      await sendEnquiryEmail(enquiry);
    } catch (emailError) {
      console.error("Email sending failed:", emailError.message);
    }

    return res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully.",
      data: { id: enquiry._id },
    });
  } catch (err) {
    next(err);
  }
}

/**
 * GET /api/enquiries
 * Retrieve all enquiries — reserved for the future admin dashboard.
 */
export async function getEnquiries(req, res, next) {
  try {
    const { status, page = 1, limit = 20 } = req.query;

    const filter = {};
    if (status) filter.status = status;

    const skip = (Number(page) - 1) * Number(limit);

    const [enquiries, total] = await Promise.all([
      Enquiry.find(filter)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(Number(limit))
        .lean(),
      Enquiry.countDocuments(filter),
    ]);

    return res.status(200).json({
      success: true,
      data: enquiries,
      pagination: {
        total,
        page: Number(page),
        limit: Number(limit),
        pages: Math.ceil(total / Number(limit)),
      },
    });
  } catch (err) {
    next(err);
  }
}
