const { test, describe, beforeEach, after } = require('node:test')
const assert = require('node:assert')
const mongoose = require('mongoose')
const supertest = require('supertest')
const helper = require('./test_help')
const app = require('../app')
const api = supertest(app)


const Shipment = require('../models/shipment.js')

describe('CRUD operations for shipment entities', ()=>{
    beforeEach(async ()=>{
        await Shipment.deleteMany({})
    })

    test('Creating a new shipment object ', async ()=>{
    const shipmentAtStart = await helper.shipmentsInDb()

    const newShipment = {  shipment_id: 101, shipment_status: "Delivered", location: "Chicago", timestamp: new Date()}

    await api
      .post('/api/shipment')
      .send(newShipment)
      .expect(201)
      .expect('Content-Type', /application\/json/)

    const shipmentsAtEnd = await helper.shipmentsInDb()
    assert.strictEqual(shipmentsAtEnd.length, shipmentAtStart.length + 1)

    const shipmentIds = shipmentsAtEnd.map(s => s.shipment_id)
    assert(shipmentIds.includes(newShipment.shipment_id))
    

    })
})
after(async () => {
    await mongoose.connection.close()
  })