
import React, { useEffect, useState } from "react";
import "./Landing.css"; // Import CSS file

function Landing() {
  return (
    <>
      <div className="marquee-container">
        <div className="marquee">
          <span>Welcome to Auction App. Complete the Signup process for parcipating in auction.</span>
        </div>
      </div>
      <div className="landing-page">
      <div className="content">
        <h2>Welcome to Auction App</h2>
        <p>
          An auction is usually a process of buying and selling goods or services
          by offering them up for bids, taking bids, and then selling the item to
          the highest bidder or buying the item from the lowest bidder. Some
          exceptions to this definition exist and are described in the section
          about different types.
        </p>
      </div>
      </div>
    
    </>
  );
}

export default Landing;
