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
  origin:  [
    "http://localhost:5173", // local dev
    "https://react-project-smoky-eight.vercel.app", // your Vercel frontend
  ],
  methods: ["POST"],
  allowedHeaders: ["Content-Type"]
}));

app.use(express.json());

// API route must come after express setup
app.post("/api/contact", async (req, res) => {
   console.log("Received request from:", req.headers.origin);
  console.log("Data:", req.body);
  const { name, email, contact, message } = req.body;

  if (
  !name || validator.isEmpty(name) ||
  !email || !validator.isEmail(email) ||
  !contact || !validator.isMobilePhone(contact, "en-IN") ||
  !message || validator.isEmpty(message)
) {
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

    await transporter.sendMail({
      from: `"HyperCargo Website Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "New Contact Form Message",
      text: `
Name: ${name}
Email: ${email}
Contact: ${contact}

Message:
${message}
      `
    });

    res.status(200).json({ message: "Message sent successfully!" });
  } catch (err) {
    console.error("Email error:", err);
    res.status(500).json({ message: "Error sending email.", error: err.message });
  }
});

// ✅ Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

