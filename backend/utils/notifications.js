const courier = require("./courierClient")


async function sendEmailNotification(userEmail, subject, body) {
  const templateId = "J3XSP50GC64Z9NPFGXY117X901V9";
  try {
    const { requestId } = await courier.send({
      message: {
        to: {
          email: userEmail,
        },
        template: templateId,
        data: {
          recipientName: body.recipientName, 
          _id: body._id,
          status: body.status, 
          destination: body.destination,
          trackingLink: body.trackingLink
        },
      },
    });

    console.log(`Email sent! Request ID: ${requestId}`);
  } catch (error) {
    console.error("Failed to send email:", error);
  }
}


module.exports = { sendEmailNotification };
