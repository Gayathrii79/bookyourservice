import axios from "axios";

export async function sendEnquiryEmail(enquiry) {
  await axios.post(
    "https://api.brevo.com/v3/smtp/email",
    {
      sender: {
        name: "BookYourServices",
        email: "bookyourservicebys@gmail.com"
      },
      to: [
        {
          email: "bookyourservicebys@gmail.com"
        }
      ],
      subject: `📩 New Enquiry - ${enquiry.service}`,
      htmlContent: `
        <h2>New BookYourService Enquiry</h2>
        <p><b>Name:</b> ${enquiry.name}</p>
        <p><b>Phone:</b> ${enquiry.phone}</p>
        <p><b>Category:</b> ${enquiry.category}</p>
        <p><b>Service:</b> ${enquiry.service}</p>
        <p><b>Message:</b> ${enquiry.message || "No message"}</p>
      `,
    },
    {
      headers: {
        "api-key": process.env.BREVO_API_KEY,
        "Content-Type": "application/json",
      },
    }
  );
}