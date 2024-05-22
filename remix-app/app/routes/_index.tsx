import type { MetaFunction } from "@remix-run/node";
import { useNavigate } from "@remix-run/react";
import AttentionCard from "../components/AttentionCard";
import indexData from "../data/index.json";
import '../css/index.css';

import imgGym from '../asset/gym.jpg';
import imgSauna from '../asset/sauna.png';
import imgMassage from '../asset/massage.jpeg';
import imgPool from '../asset/pool.jpg';
import imgCoach from '../asset/coach.jpg';

export const meta: MetaFunction = () => {
  return [
    { title: "Gym-Projekt" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const navigate = useNavigate(); // Move the hook to the top level

  const img = [
    imgGym,
    imgSauna,
    imgMassage,
    imgPool,
    imgCoach
  ];

  const handleAbobutton = () => {
    navigate('/abonnement');
  };

  return (
    <div className="center">
      <div className="container">
        <button id="aboButton" onClick={handleAbobutton}>Hole ein Abo!</button>
        <h1 id="title">Chicas Gym</h1>
        {Object.entries(indexData.attentionCard).map(([key, value], index) => {
          return <AttentionCard key={key} attentionCard={value} img={img[index]} />;
        })}
      </div>
    </div>
  );
}
