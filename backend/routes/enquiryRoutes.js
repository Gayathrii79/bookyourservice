import { Router } from "express";
import { body } from "express-validator";
import { createEnquiry, getEnquiries } from "../controllers/enquiryController.js";

const router = Router();

/** Validation rules for enquiry submission */
const enquiryValidation = [
  body("name")
    .trim()
    .notEmpty().withMessage("Name is required.")
    .isLength({ min: 2, max: 100 }).withMessage("Name must be between 2 and 100 characters."),

  body("phone")
    .trim()
    .notEmpty().withMessage("Phone number is required.")
    .matches(/^[+\d\s\-().]{7,20}$/).withMessage("Please enter a valid phone number."),

  body("category")
    .optional()
    .trim()
    .isLength({ max: 100 }).withMessage("Category cannot exceed 100 characters."),

  body("service")
    .optional()
    .trim()
    .isLength({ max: 150 }).withMessage("Service name cannot exceed 150 characters."),

  body("message")
    .optional()
    .trim()
    .isLength({ max: 1000 }).withMessage("Message cannot exceed 1000 characters."),
];

// POST /api/enquiry — Submit a new enquiry
router.post("/enquiry", enquiryValidation, createEnquiry);

// GET /api/enquiries — List all enquiries (future admin dashboard)
router.get("/enquiries", getEnquiries);

export default router;
