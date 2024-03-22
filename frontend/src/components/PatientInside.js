import React, { useState, useEffect } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';

function PatientInside() {
  const [bloodBanks, setBloodBanks] = useState([]);

  useEffect(() => {
    // Fetch blood bank data from backend API
    axios.get('http://localhost:8081/getBloodBanks')
      .then(response => {
        setBloodBanks(response.data); // Set the fetched data to state
      })
      .catch(error => {
        console.error('Error fetching blood banks:', error);
      });
  }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Blood Bank Name</th>
          <th>Blood Bank Address</th>
          <th>Phone Number</th>
          <th>Blood Group Available</th>
          <th>Quantity Available</th>
          <th>Price (/ltr)</th>
        </tr>
      </thead>
      <tbody>
        {bloodBanks.map((bank, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{bank.Bb_name}</td>
            <td>{bank.Bb_location}</td>
            <td>{bank.Bb_contact}</td>
            <td>{bank.Avail_bloods}</td>
            <td>{bank.Quantity}</td>
            <td>{bank.Price}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default PatientInside;
