import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  family: 4,
  connectionTimeout: 10000,
  greetingTimeout: 10000,
  socketTimeout: 10000,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendEnquiryEmail(enquiry) {
  console.log("Sending email...");

  await transporter.verify();
  console.log("SMTP Connected");

  const info = await transporter.sendMail({
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

  console.log("Email sent:", info.messageId);
}