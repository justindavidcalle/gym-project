import React from 'react';

interface AboCardProps {    
    abo: {
        name: string;
        description: string;
        price: number;
    };
}

const AboCard = (props: AboCardProps) => {
  const {name, description, price} = props.abo; 

  return (
    <div className='AboCard'>
      <h1>{name}</h1>
      <h2>{price} .-/Jahr</h2> 
      <p>{description}</p>
      <button>Kaufen</button>
    </div>
  );
};

export default AboCard;
