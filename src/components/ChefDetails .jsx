import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefDetails  = () => {
  const [details, setDetails] = useState('');
  const data = useLoaderData();
  console.log("........",data);
  const {name} = data;
  
  return (
    <div>
        <h2>{name}</h2>
    </div>
  );
};

export default ChefDetails ;