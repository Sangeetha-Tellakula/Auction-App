import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PostAuction() {
  const [itemName, setItemName] = useState('');
  const [startingBid, setStartingBid] = useState('');
  const [image, setImage] = useState(null); // Store image preview
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Convert image to base64
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!itemName || !startingBid) {
      setError('Item Name and Starting Bid are required!');
      return;
    }

    const newAuction = {
      id: Date.now(), // Unique ID
      itemName,
      startingBid,
      image, // Store the image preview
      isClosed: false,
    };

    // Save to local storage (Mimicking backend)
    const auctions = JSON.parse(localStorage.getItem('auctions')) || [];
    auctions.push(newAuction);
    localStorage.setItem('auctions', JSON.stringify(auctions));

    alert('Auction posted successfully!');
    navigate('/dashboard'); // Redirect to dashboard
  };

  return (
    <div className="form-container">
      <h2>Post New Auction</h2>
      {error && <p className="error">{error}</p>}
      
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Item Name" 
          value={itemName} 
          onChange={(e) => setItemName(e.target.value)} 
          required 
        />
        <input 
          type="number" 
          placeholder="Starting Bid" 
          value={startingBid} 
          onChange={(e) => setStartingBid(e.target.value)} 
          required 
        />
        
        {/* Image Upload Field */}
        <input type="file" accept="image/*" onChange={handleImageChange} />
        
        {/* Show Image Preview */}
        {image && <img src={image} alt="Preview" style={{ width: '200px', marginTop: '10px' }} />}
        
        <button type="submit">Post Auction</button>
      </form>
    </div>
  );
}

export default PostAuction;

