import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const auctions = JSON.parse(localStorage.getItem('auctions')) || [];
    setItems(auctions);
  }, []);

  return (
    <div>
      <h2>Auction Dashboard</h2>

      <Link to="/post-auction">
        <button>Post New Auction</button>
      </Link>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Link to={`/auction/${item.id}`}>
              <strong>{item.itemName}</strong> - Current Bid: ${item.startingBid} {item.isClosed ? '(Closed)' : ''}
            </Link>
            {item.image && <img src={item.image} alt={item.itemName} style={{ width: '100px', marginTop: '5px' }} />}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;

