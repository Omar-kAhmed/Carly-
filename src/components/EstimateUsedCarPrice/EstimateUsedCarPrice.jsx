import React, { useState } from 'react';
import axios from 'axios';
import './EstimateUsedCarPrice.css'; // Assuming a CSS file for styling

const EstimateUsedCarPrice = () => {
  // States for input fields
  const [newPrice, setNewPrice] = useState('');
  const [age, setAge] = useState('');
  const [mileage, setMileage] = useState('');
  const [condition, setCondition] = useState('Good');
  const [isLuxury, setIsLuxury] = useState(false);

  // State for the result
  const [estimatedPrice, setEstimatedPrice] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false); // State to show loading spinner
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear any previous error messages
    setErrorMessage('');
    setEstimatedPrice(null);

    // Validate inputs before sending
    if (!newPrice || !age || !mileage || !condition || typeof isLuxury !== "boolean") {
      setErrorMessage("Please fill all the fields correctly.");
      setTimeout(() => {
        setErrorMessage(''); // Clear the error message after 3 seconds
      }, 3000);
      return;
    }

    setLoading(true);

    // Prepare data for the request
    const data = {
      newPrice: parseFloat(newPrice),
      age: parseInt(age),
      mileage: parseInt(mileage),
      condition: condition,
      isLuxury: isLuxury,
    };

    try {
      // Send request to backend
      const response = await axios.post('http://localhost:8080/api/used-car-price/estimate-used-car-price', data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Assuming JWT token is stored in localStorage
        }
      });

      // Handle success response
      setEstimatedPrice(response.data.estimatedPrice);
    } catch (error) {
      // Handle error
      setErrorMessage('Failed to estimate used car price. Please try again.');
      setTimeout(() => {
        setErrorMessage(''); // Clear the error message after 3 seconds
      }, 1000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="estimate-container">
      <h2 className='maintitle'>Estimate Used Car Price</h2>
      <form onSubmit={handleSubmit} className="estimate-form">
        <div className="form-group">
          <div className="black1"></div>
          <label className='lprice' htmlFor="newPrice">New Car Price ($)</label>
          <input
            type="number"
            id="newPrice"
            value={newPrice}
            onChange={(e) => setNewPrice(e.target.value)}
            required
            placeholder='new price'
            className="form-control"
            min="1"
          />
        </div>

        <div className="form-group">
          <label className='lage' htmlFor="age">Car Age (Years)</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
            className="form-control1"
            placeholder='car Age'
            min="0"
            max="25"
          />
        </div>

        <div className="form-group">
          <label className='lmile' htmlFor="mileage">Car Mileage (km)</label>
          <input
            type="number"
            id="mileage"
            value={mileage}
            onChange={(e) => setMileage(e.target.value)}
            required
            placeholder='mileage'
            className="form-control2"
            min="0"
          />
        </div>

        <div className="form-group">
          <label className='lcondition' htmlFor="condition">Condition</label>
          <select
            id="condition"
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
            className="form-control3"
            required
          >
            <option value="Excellent">Excellent</option>
            <option value="Good">Good</option>
            <option value="Fair">Fair</option>
            <option value="Poor">Poor</option>
          </select>
        </div>

        <div className="form-group">
          <label className='lbox'>
            <input
              type="checkbox"
              checked={isLuxury}
              onChange={() => setIsLuxury(!isLuxury)}
              placeholder='luxury?'
              className='form-control4'
            />
            Luxury Car
          </label>
        </div>

        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Estimating..." : "Estimate Price"}
        </button>
      </form>

      {/* Display the estimated price */}
      {estimatedPrice !== null && (
        <div className="mt-4">
          <h4 className='pp'>Estimated Used Car Price: {estimatedPrice}</h4>
        </div>
      )}

      {/* Display error message with animation */}
      {errorMessage && (
        <div className={`mt-4 alert alert-danger ${errorMessage ? 'show' : ''}`}>
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default EstimateUsedCarPrice;
