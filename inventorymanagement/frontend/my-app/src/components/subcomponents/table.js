import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Table() {
  const navigate = useNavigate();
  const [drivers, setDrivers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function fetchDrivers() {
      try {
        const response = await axios.get('/api/getFormData');
        setDrivers(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchDrivers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/deleteFormData/${id}`);
      const newDrivers = drivers.filter((driver) => driver._id !== id);
      setDrivers(newDrivers);
    } catch (error) {
      console.error('Error deleting data:', error.response || error);
    }
  };

  const handleUpdateClick = (id) => {
    navigate(`/updateDriver/${id}`);
  };

  function renderRating(rating) {
    const fullStar = '★';
    const emptyStar = '☆';
    let stars = '';
    for (let i = 0; i < Math.floor(rating); i++) {
      stars += fullStar;
    }
    if (rating % 1 !== 0) stars += '½';
    while (stars.length < 5) {
      stars += emptyStar;
    }
    return stars;
  }

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredDrivers = searchTerm
    ? drivers.filter((driver) =>
        driver.licenseNumber.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : drivers;

  return (
    <div>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search by Item No..."
        value={searchTerm}
        onChange={handleSearchChange}
        style={{
          width: '100%',
          marginBottom: '20px',
          padding: '10px 15px',
          border: '1px solid #ced4da',
          borderRadius: '25px', // Gives rounded corners
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)', // Adds a subtle shadow
          transition: 'all 0.2s ease-in-out', // Smooth transition for focus effect
        }}
      />

      <table className='table table-hover' style={{ backgroundColor: '#b2bec3', marginTop: '80px' }}>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Item No</th>
            <th scope='col'>Name</th>
            <th scope='col'>Price </th>
            <th scope='col'>Quantity</th>
            <th scope='col'>Availability Status</th>
            <th scope='col'>Rating</th>
            <th scope='col'>Update</th>
            <th scope='col'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {filteredDrivers.map((driver, index) => (
            <tr key={driver._id}>
              <th scope='row'>{index + 1}</th>
              <td>{driver.licenseNumber}</td>
              <td>{driver.fullName}</td>
              <td>{driver.price}</td>  {/* Updated field from phoneNumber to price */}
              <td>{driver.quantity}</td>  {/* Updated field from vehicleType to quantity */}
              <td>{driver.availabilityStatus}</td>
              <td>{renderRating(driver.rating)}</td>
              <td>
                <button
                  type='button'
                  className='btn btn-primary'
                  onClick={() => handleUpdateClick(driver._id)}
                >
                  Update
                </button>
              </td>
              <td>
                <button
                  type='button'
                  className='btn btn-danger'
                  onClick={() => handleDelete(driver._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
