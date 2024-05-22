import React from 'react';
import { useNavigate } from "@remix-run/react";

interface AboCardProps {    
    abo: {
        name: string;
        description: string;
        price: number;
    };
}

const AboCard = (props: AboCardProps) => {
  const {name, description, price} = props.abo; 
  const navigate = useNavigate();

  const handleHomeButton = () => {
    navigate('/');
  };

  return (
    <div className='AboCard'>
      <h1>{name}</h1>
      <h2>{price} .-/Jahr</h2> 
      <p>{description}</p>
      <button onClick={handleHomeButton}>Kaufen</button>
    </div>
  );
};

export default AboCard;
