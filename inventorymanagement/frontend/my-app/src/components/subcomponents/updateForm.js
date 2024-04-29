import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

export default function UpdateForm() {
  const { driverId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    price: '',        // Changed from phoneNumber to price
    licenseNumber: '',
    quantity: '',     // Changed from vehicleType to quantity
    availabilityStatus: '',
    rating: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      if (driverId) {
        try {
          const response = await axios.get(`/api/getFormData/${driverId}`);
          const data = response.data;
          setFormData({
            fullName: data.fullName,
            price: data.price,       // Ensure this matches the updated schema
            licenseNumber: data.licenseNumber,
            quantity: data.quantity, // Ensure this matches the updated schema
            availabilityStatus: data.availabilityStatus,
            rating: data.rating,
          });
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };
    fetchData();
  }, [driverId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`/api/updateFormData/${driverId}`, formData);
      console.log(response.data);
      navigate('/'); // Redirect to the home page URL
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = () => {
    navigate('/'); // Navigate programmatically to '/drivers' route
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label" style={{ color: 'black' }}>
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label" style={{ color: 'black' }}>
            Price
          </label>
          <input
            type="number" // Changed type to number to accept numeric values
            className="form-control"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="licenseNumber" className="form-label" style={{ color: 'black' }}>
           ID
          </label>
          <input
            type="text"
            className="form-control"
            id="licenseNumber"
            name="licenseNumber"
            value={formData.licenseNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="quantity" className="form-label" style={{ color: 'black' }}>
            Quantity
          </label>
          <input
            type="number" // Changed type to number to accept numeric values
            className="form-control"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="availabilityStatus" className="form-label" style={{ color: 'black' }}>
            Availability Status
          </label>
          <select
            className="form-select"
            id="availabilityStatus"
            name="availabilityStatus"
            value={formData.availabilityStatus}
            onChange={handleChange}
            required
          >
            <option value="">Select Availability Status</option>
            <option value="available">Available</option>
            <option value="notAvailable">Not Available</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="rating" className="form-label" style={{ color: 'black' }}>
            Rating
          </label>
          <select
            className="form-select"
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            required
          >
            <option value="">Select Rating</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        {/* Buttons */}
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <button
              type="submit"
              className="btn btn-primary submit_before_viewDrivers"
              style={{ marginRight: '10px' }}
            >
              Submit
            </button>
          <button
              type="button"
              className="btn btn-primary view_drivers"
              onClick={handleClick}
              style={{ marginLeft: '1000px' }}
            >
              View Items
            </button>
        </div>
      </form>
    </div>
  );
}
