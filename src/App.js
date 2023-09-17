import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';

function App() {
  const [tickets, setTickets] = useState([]);
  const [groupingOption, setGroupingOption] = useState('status');
  const [sortOption, setSortOption] = useState('priority');
  const [alignItems, setAlignItems] = useState('stretch');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
        if (response.ok) {
          const data = await response.json();
          setTickets(data);
        } else {
          console.error('Failed to fetch data from the API');
        }
      } catch (error) {
        console.error('An error occurred while fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="App">
        <div>
          <Navbar/>
          <Header/>
        </div>
      </div>
    </div>
  );
}

export default App;


