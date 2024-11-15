import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function EditFlight() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    airline: '',
    source: '',
    destination: '',
    fare: '',
    duration: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8080/flights/${id}`)
      .then(response => setFormData(response.data.data))
      .catch(error => console.log(error));
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8080/flights/${id}`, formData)
      .then(() => navigate('/'))
      .catch(error => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Flight</h2>
      <div className="mb-3">
        <label>Airline</label>
        <input type="text" name="airline" className="form-control" value={formData.airline} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label>Source</label>
        <input type="text" name="source" className="form-control" value={formData.source} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label>Destination</label>
        <input type="text" name="destination" className="form-control" value={formData.destination} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label>Fare</label>
        <input type="text" name="fare" className="form-control" value={formData.fare} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label>Duration</label>
        <input type="text" name="duration" className="form-control" value={formData.duration} onChange={handleChange} />
      </div>
      <button type="submit" className="btn btn-primary">Save Changes</button>
    </form>
  );
}

export default EditFlight;