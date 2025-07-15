const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const validator = require("validator");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Rate Limiting: 50 requests per 15 minutes per IP
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 50,
  message: "Too many requests. Please try again later."
});
app.use(limiter);

// CORS: Allow only your frontend domain
app.use(cors({
  origin: "https://your-frontend-domain.com",  // <-- Replace this with your deployed frontend URL
  methods: ["POST"],
  allowedHeaders: ["Content-Type"]
}));


app.use(express.json());

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

console.log("Received contact form submission:", req.body); //////////////

  // Input validation
  if (
    !validator.isEmail(email) ||
    validator.isEmpty(name) ||
    validator.isEmpty(message)
  ) {
    console.log("Invalid input detected");  /////////////////
    return res.status(400).json({ message: "Invalid input." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
       console.log("Sending email via:", process.env.EMAIL_USER);///////////
    await transporter.sendMail({
      from: `"HyperCargo Website Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "New Contact Form Message",
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    });
      console.log("Email sent successfully.");/////////////////
    res.status(200).json({ message: "Message sent successfully!" });
  } catch (err) {
      console.error("Email error:", err); // Log full error
  res.status(500).json({ message: "Error sending email.", error: err.message });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
