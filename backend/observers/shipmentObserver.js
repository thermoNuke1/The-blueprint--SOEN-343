const { sendEmailNotification } = require('../utils/notifications');
const User = require('../models/users');

class ShipmentObserver {
  async update(shipment) {
    const { shipment_status, destination, origin, tracking, user,  _id } = shipment;

    console.log(`Shipment status changed: ${shipment_status}`);
    const trackingLink = `http://localhost:3001/tracking#${_id}`;
    try {
      
      const userData = await User.findById(user, 'firstname lastname username'); 


      if (!userData) {
        console.error('User not found for shipment.');
        return;
      }

      const emailContent = {
        recipientName: `${userData.firstname} ${userData.lastname}`, 
        _id:_id.toString(),
        status: shipment_status,
        destination: destination,
        origin: origin,
        trackingLink: trackingLink 
      };

      await sendEmailNotification(
        userData.username, 
        `Shipment Status Updated: ${shipment_status}`, 
        emailContent
      );

      console.log('Email notification sent successfully.');
    } catch (error) {
      console.error('Error sending email notification:', error);
    }
  }
}

    

  

module.exports = new ShipmentObserver();
