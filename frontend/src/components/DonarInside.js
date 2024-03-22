import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function DonarInside() {
  const [bloodBanks, setBloodBanks] = useState([]);

  useEffect(() => {
    fetchData(); // Fetch data on initial load
  }, []);

  const fetchData = () => {
    axios.get('http://localhost:8081/getBloodBanks')
      .then(response => {
        setBloodBanks(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8081/deletebloodbank/${id}`)
      .then(response => {
        console.log('Row deleted successfully');
        // Filter out the deleted row from the state
        setBloodBanks(bloodBanks.filter(bank => bank.Bb_id !== id));
      })
      .catch(error => {
        console.error('Error deleting row:', error);
      });
  };
  
  

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Blood Bank Name</th>
          <th colspan={2}>Blood Bank Address</th>
          <th>Blood Bank Contact Number</th>
          <th>Blood Group</th>
          <th>Price (/ltr)</th>
          <th>Quantity Available</th>
          <th><Button variant="success">
                <Link to="/addbloodgroup" style={{ color: "white", textDecoration: 'none' }}>Add</Link>
              </Button>
          </th>
        </tr>
      </thead>
      <tbody>
        {bloodBanks.map((bank, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{bank.Bb_name}</td>
            <td colspan={2}>{bank.Bb_location}</td>
            <td>{bank.Bb_contact}</td>
            <td>{bank.Avail_bloods}</td>
            <td>{bank.Price}</td>
            <td>{bank.Quantity}</td>
            <td>
              <Button variant="success">
                <Link to="/addbloodgroup" style={{ color: "white", textDecoration: 'none' }}>Add</Link>
              </Button>
              <Button variant="danger" style={{ marginLeft: 15 }} onClick={() => handleDelete(bank.Bb_id)}>Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default DonarInside;
