import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddFlight from './flight_pages/AddFlight';
import EditFlight from './flight_pages/EditFlight';
import ListFlight from './flight_pages/ListFlight';

function App() {
  return (
    <div className="container">
      <h1 className="my-4 text-center">Flight Management</h1>
      <Routes>
        <Route path="/" element={<ListFlight />} />
        <Route path="/add" element={<AddFlight />} />
        <Route path="/edit/:id" element={<EditFlight />} />
      </Routes>
    </div>
  );
}

export default App;