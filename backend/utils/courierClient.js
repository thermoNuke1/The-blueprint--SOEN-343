require("dotenv").config();
const { CourierClient } = require("@trycourier/courier");

const courier = CourierClient({
  authorizationToken: process.env.COURIER_AUTH_TOKEN,
});

module.exports = courier;
