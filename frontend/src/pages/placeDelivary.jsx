import { useState } from 'react'
import parcelService from '../services/parcel'

const CreateParcel = () => {
  const [width, setWidth] = useState('')
  const [length, setLength] = useState('')
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [serialNumber, setSerialNumber] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    const newParcel = {
      width_dimension: width,
      length_dimension: length,
      height_dimension: height,
      weight: weight,
      serialNumber: serialNumber,
    }

    try {
      // Call create parcel service
      const createdParcel = await parcelService.create(newParcel)
      setMessage(`Parcel created successfully! Serial number: ${createdParcel.parcel.serialNumber}`)
      setWidth('')
      setLength('')
      setHeight('')
      setWeight('')
      setSerialNumber('')
      setError('')
    } catch (err) {
      setError('Failed to create parcel, please try again.')
      setMessage('')
    }
  }

  return (
    <div>
      <h2>Create New Parcel</h2>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Width</label>
          <input
            type="number"
            value={width}
            onChange={({ target }) => setWidth(target.value)}
            required
          />
        </div>
        <div>
          <label>Length</label>
          <input
            type="number"
            value={length}
            onChange={({ target }) => setLength(target.value)}
            required
          />
        </div>
        <div>
          <label>Height</label>
          <input
            type="number"
            value={height}
            onChange={({ target }) => setHeight(target.value)}
            required
          />
        </div>
        <div>
          <label>Weight</label>
          <input
            type="number"
            value={weight}
            onChange={({ target }) => setWeight(target.value)}
            required
          />
        </div>
        <div>
          <label>Serial Number</label>
          <input
            type="text"
            value={serialNumber}
            onChange={({ target }) => setSerialNumber(target.value)}
            required
          />
        </div>
        <button type="submit">Create Parcel</button>
      </form>
    </div>
  )
}

export default CreateParcel
