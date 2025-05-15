import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";
import Brevo from "@getbrevo/brevo"; // Brevo SDK

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Set up Brevo client
const brevoClient = Brevo.ApiClient.instance;
const apiKey = brevoClient.authentications["api-key"];
apiKey.apiKey = process.env.BREVO_API_KEY; // Use your Brevo API key

const transactionalEmailApi = new Brevo.TransactionalEmailsApi();

app.post("/send-email", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required." });
  }

  try {
    // 🔹 Call Laravel API to check if the email exists
    const checkEmailResponse = await axios.post(
      "http://127.0.0.1:8000/api/check-email",
      { email }
    );

    if (checkEmailResponse.status !== 200) {
      return res.status(404).json({ error: "Email not found." });
    }

    // 🔹 Send email using Brevo
    const sendSmtpEmail = {
      to: [{ email }],
      sender: { name: "Your App", email: "your@email.com" },
      subject: "Password Reset Request",
      htmlContent: `<p>Click the link to reset your password: <a href="http://localhost:5173/reset-password?email=${email}">Reset Password</a></p>`,
    };

    await transactionalEmailApi.sendTransacEmail(sendSmtpEmail);

    res.status(200).json({
      message: "Reset link sent to your email. Check your inbox or spam.",
    });
  } catch (error) {
    console.error("Error details:", error.response?.data || error.message);

    if (error.response) {
      res.status(error.response.status).json({
        error: error.response.data.message || "An error occurred.",
      });
    } else {
      res.status(500).json({
        error: "Server error. Please try again later.",
      });
    }
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
