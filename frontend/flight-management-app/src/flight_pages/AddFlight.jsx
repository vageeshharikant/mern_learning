import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddFlight() {
  const [formData, setFormData] = useState({
    airline: '',
    source: '',
    destination: '',
    fare: '',
    duration:''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/flights', formData)
      .then(() => navigate('/'))
      .catch(error => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Flight</h2>
      <div className="mb-3">
        <label>Airline</label>
        <input type="text" name="airline" className="form-control" onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label>Source</label>
        <input type="text" name="source" className="form-control" onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label>Destination</label>
        <input type="text" name="destination" className="form-control" onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label>Fare</label>
        <input type="text" name="fare" className="form-control" onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label>Duration</label>
        <input type="text" name="duration" className="form-control" onChange={handleChange} />
      </div>
      <button type="submit" className="btn btn-primary">Add Flight</button>
    </form>
  );
}

export default AddFlight;