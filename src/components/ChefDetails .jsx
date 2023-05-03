import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefDetails  = () => {
  const details = useLoaderData();
  console.log(details);
  return (
    <div>
        <h2>chef deatial comming</h2>
    </div>
  );
};

export default ChefDetails ;