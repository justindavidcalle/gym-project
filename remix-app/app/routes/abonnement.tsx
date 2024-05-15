import React from 'react';
import AboCard from '../components/AboCard';
import abonnementData from '../data/abonnement.json';
import '../css/abonnement.css';
import "@fontsource/lato/400.css"; 


const Abonnement = () => {
  const firstAbo = abonnementData[1];

  return (
    <div>
      <h1>Abonnement</h1>
      <h2>Wähle dein Abonnement aus!</h2>
      <div className='AboCards-Table'>
        {Object.entries(abonnementData).map(([key, value]) => {
          return <AboCard key={key} abo={value} />;
        })}
      </div>
    </div>
  );
}

export default Abonnement;
