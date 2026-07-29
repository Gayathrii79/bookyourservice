import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendEnquiryEmail(enquiry) {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `📩 New Enquiry - ${enquiry.service}`,
    html: `
      <h2>New BookYourService Enquiry</h2>
      <p><strong>Name:</strong> ${enquiry.name}</p>
      <p><strong>Phone:</strong> ${enquiry.phone}</p>
      <p><strong>Category:</strong> ${enquiry.category}</p>
      <p><strong>Service:</strong> ${enquiry.service}</p>
      <p><strong>Message:</strong> ${enquiry.message || "No message"}</p>
    `,
  });
}