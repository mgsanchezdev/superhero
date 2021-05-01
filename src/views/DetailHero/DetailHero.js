/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
import React from 'react';
import { Image } from 'react-bootstrap';
import { HeroDetailsContext } from '../../context/heroDetails';
import './DetailHero.css';

const DetailHero = () => {
  const { hero } = React.useContext(HeroDetailsContext);
  return (
    <>
      <h1 className="title-hero">Detalle de Heroe </h1>
      <div className="container-detail-hero">
        <Image src={hero.image.url} />
        <div className="detail-hero">
          <h2>Nombre: {hero.name}</h2>
          <h2>Powerstats:</h2>
          <ul>
            <li>
              <h3>intelligence: {hero.powerstats.intelligence}</h3>
            </li>
            <li>
              <h3>strength: {hero.powerstats.strength}</h3>
            </li>
            <li>
              <h3>speed: {hero.powerstats.speed}</h3>
            </li>
            <li>
              <h3>durability: {hero.powerstats.durability}</h3>
            </li>
            <li>
              <h3>power: {hero.powerstats.power}</h3>
            </li>
            <li>
              <h3>combat: {hero.powerstats.combat}</h3>
            </li>
          </ul>
          <h2>Weight: {hero.appearance.weight[1]} </h2>
          <h2>Height: {hero.appearance.height[1]} </h2>
          <h2>Work: {hero.work.base} </h2>
        </div>
      </div>
    </>
  );
};

export default DetailHero;
