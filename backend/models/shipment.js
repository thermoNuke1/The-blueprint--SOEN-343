const mongoose = require('mongoose');
const toJSONTransform = require('./adaptor')


const shipmentSchema = new mongoose.Schema({
  shipment_status: { type: String, required: true },
  location: { type: String },
  timestamp: { type: Date },
  origin: { type: String },
  destination: { type: String },
  paid: { type: Boolean, default: false },
  parcels: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Parcel' }],
  deliveryType: { type: String, enum: ['standard', 'express'], default: 'standard' },
  statusHistory: [
    {
      status: String,
      updatedAt: { type: Date, default: Date.now },
    },
  ],
  tracking: {
    currentLocation: { type: String, default: '' },
    progress: { type: Number, min: 0, max: 100, default: 0 },
  },
  ShippingLabel: [
    {
      labelDetails: { type: String, default: '' },
    },
  ],
});


// Pre-save middleware
shipmentSchema.pre('save', function (next) {
  console.log('Before Save:', this);
  if (this.isModified('shipment_status')) {
    this.statusHistory.push({ status: this.shipment_status });
   // this.notifyObservers();
  }
  next();
});

// Customize JSON output
shipmentSchema.toJSONTransform

const Shipment = mongoose.model('Shipment', shipmentSchema);

module.exports = Shipment;
