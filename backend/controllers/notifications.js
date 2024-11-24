const express = require("express");
const courier = require("../utils/courierClient");
const {sendEmailNotification} = require('../utils/notifications');
const router = express.Router();

router.post("/send-email", async (req, res) => {
  const { email, subject, body } = req.body;

  if (!email || !subject || !body) {
    return res.status(400).json({ error: "Email, subject, and body are required" });
  }

  try {
    
    await sendEmailNotification(email, subject, body);

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});


module.exports = router;

// curl -X POST http://localhost:3001/api/notifications/send-email \
// -H "Content-Type: application/json" \
// -d '{
//   "email": "sydcampbell@hotmail.com",
//   "subject": "Order Confirmed",
//   "body": {
//     "status": "Shipped",
//     "destination": "Toronto",
//     "origin": "Montreal",
//     "estimated_date": "2024-11-30"
//   }
// }'
