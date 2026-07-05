import mongoose from "mongoose";

/**
 * Enquiry Schema
 *
 * Stores every lead submitted through the Request Service form.
 * The business owner reviews these and contacts the customer offline.
 */
const enquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [2, "Name must be at least 2 characters"],
      maxlength: [100, "Name cannot exceed 100 characters"],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
      match: [
        /^[+\d\s\-().]{7,20}$/,
        "Please provide a valid phone number",
      ],
    },
    category: {
      type: String,
      trim: true,
      default: "General",
      maxlength: [100, "Category cannot exceed 100 characters"],
    },
    service: {
      type: String,
      trim: true,
      default: "",
      maxlength: [150, "Service name cannot exceed 150 characters"],
    },
    message: {
      type: String,
      trim: true,
      default: "",
      maxlength: [1000, "Message cannot exceed 1000 characters"],
    },
    status: {
      type: String,
      enum: ["Pending", "Contacted", "Resolved", "Cancelled"],
      default: "Pending",
    },
  },
  {
    // Automatically adds createdAt and updatedAt fields
    timestamps: true,
  }
);

export const Enquiry = mongoose.model("Enquiry", enquirySchema);
