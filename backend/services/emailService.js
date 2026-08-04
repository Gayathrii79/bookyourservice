import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendEnquiryEmail(enquiry) {
  const info = await transporter.sendMail({
    from: `"BookYourServices" <${process.env.EMAIL_USER}>`,
    to: "bookyourservicebys@gmail.com",
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

  console.log("Email sent:", info.messageId);
}