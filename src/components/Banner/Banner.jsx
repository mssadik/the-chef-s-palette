
import React from 'react';

const Banner = () => {
  return (
    <div
      className="banner"
      style={{
        backgroundImage: "url('https://thumbs.dreamstime.com/b/happy-african-american-chef-apron-happy-african-american-chef-apron-holding-egg-carton-kitchen-banner-stock-image-256426122.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '500px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        color: '#fff',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        paddingLeft: '20px', // Optional: Add left padding for the text
      }}
    >
      <h2  className='fs-1 container'> <span className='fs-20'>Welcome to The</span>  <br /> Chef's Palette</h2>
    </div>
  );
};

export default Banner;
