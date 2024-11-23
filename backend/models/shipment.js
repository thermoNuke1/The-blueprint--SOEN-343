const mongoose = require('mongoose');
const toJSONTransform = require('./adaptor')
const observer = require('../observers/observer'); 
const shipmentObserver = require('../observers/shipmentObserver');


observer.addObserver(shipmentObserver); 

const shipmentSchema = new mongoose.Schema({
  shipment_status: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
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

shipmentSchema.pre('save', function (next) {

  if (this.isNew && this.shipment_status === 'Order Placed'){
    observer.notifyObservers(this);
  }
  if (this.isModified('shipment_status')) {
    if (
      this.shipment_status === 'Processing' ||
      this.shipment_status === 'Out for Delivery' ||
      this.shipment_status === 'Delivered'
    ) {
      
      this.statusHistory.push({ status: this.shipment_status });
      
      observer.notifyObservers(this);
    }
    
  }
  
  next();
});

shipmentSchema.toJSONTransform

const Shipment = mongoose.model('Shipment', shipmentSchema);

module.exports = Shipment;
