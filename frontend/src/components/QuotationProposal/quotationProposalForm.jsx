import React, { useState } from 'react';
import './quotationProposalForm.css';

const QuotationProposalForm = () => {
  // State variables to store parcel details and calculated quote
  const [dimensions, setDimensions] = useState({
    width_dimension: '',
    length_dimension: '',
    height_dimension: '',
    weight: '',
  });
  const [quote, setQuote] = useState(null);

  // Handle form input changes
  const handleChange = (e) => {
    setDimensions({ ...dimensions, [e.target.name]: e.target.value });
  };

  // Function to calculate the quote based on dimensions and weight
  const calculateQuote = () => {
    const { width_dimension, length_dimension, height_dimension, weight } = dimensions;

    // Simple formula to calculate a mock quote
    const volume = width_dimension * length_dimension * height_dimension;
    const baseRate = 0.05; // Cost per cm^3 as an example
    const weightRate = 1.2; // Additional cost per kg as an example

    const estimatedQuote = (volume * baseRate) + (weight * weightRate);
    setQuote(estimatedQuote.toFixed(2)); // Format to two decimal places
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    calculateQuote();
  };

  return (
    <div className="quotation-proposal-form">
      <h2>Quotation Proposal Simulator</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="width_dimension">Width (cm)</label>
          <input
            type="number"
            name="width_dimension"
            id="width_dimension"
            value={dimensions.width_dimension}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="length_dimension">Length (cm)</label>
          <input
            type="number"
            name="length_dimension"
            id="length_dimension"
            value={dimensions.length_dimension}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="height_dimension">Height (cm)</label>
          <input
            type="number"
            name="height_dimension"
            id="height_dimension"
            value={dimensions.height_dimension}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="weight">Weight (kg)</label>
          <input
            type="number"
            name="weight"
            id="weight"
            value={dimensions.weight}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">Get Quote</button>
      </form>

      {quote && (
        <div className="quote-result">
          <h3>Estimated Shipping Quote:</h3>
          <p><strong>${quote}</strong></p>
        </div>
      )}
    </div>
  );
};

export default QuotationProposalForm;
