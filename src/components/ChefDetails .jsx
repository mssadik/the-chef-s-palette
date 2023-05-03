import React from 'react';

const ChefDetails = ({ chef }) => {
  return (
    <div>
      <h3>{chef.name}</h3>
      <p>Years of Experience: {chef.years_of_experience}</p>
      <p>Likes: {chef.likes}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default ChefDetails;
