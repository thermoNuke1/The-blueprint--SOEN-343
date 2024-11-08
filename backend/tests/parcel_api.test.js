const { test, describe, beforeEach, after } = require('node:test')
const assert = require('node:assert')
const mongoose = require('mongoose')
const supertest = require('supertest')
const helper = require('./test_help')
const app = require('../app')
const api = supertest(app)

const Parcel = require('../models/parcel.js')

describe('CRUD operations for parcels entities', ()=>{
    beforeEach(async ()=>{
        await Parcel.deleteMany({})
    })

    test('Creating a new parcel object ', async ()=>{
    const parcelsAtStart = await helper.parcelsInDb()

    const newParcel = { width_dimension: 10.0 , length_dimension: 10.0, height_dimension: 10.0, weight: 10.0, serialNumber:10}

    await api
      .post('/api/parcel')
      .send(newParcel)
      .expect(201)
      .expect('Content-Type', /application\/json/)

    const parcelsAtEnd = await helper.parcelsInDb()
    assert.strictEqual(parcelsAtEnd.length, parcelsAtStart.length + 1)

    const serialNumbers = parcelsAtEnd.map(p => p.serialNumber)
    assert(serialNumbers.includes(newParcel.serialNumber))
    })
})
after(async () => {
    await mongoose.connection.close()
  })