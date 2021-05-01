/* eslint-disable react/self-closing-comp */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { TeamHeroContext } from '../../context/teamHero';
import { HeroDetailsContext } from '../../context/heroDetails';
import './ItemHeroTeam.css';

const ItemHeroTeam = ({ hero }) => {
  const { removeHeroTeam } = React.useContext(TeamHeroContext);
  const { setHero } = React.useContext(HeroDetailsContext);
  const history = useHistory();

  const handleDetail = () => {
    setHero(hero);
    history.push('/detail');

    
  };

  const hamdleRemoveHero = () => {
    removeHeroTeam(hero.id);
  };

  return (
    <div className="container-itemHero">
      <img src={hero.image.url} alt={hero.name} />
      <div className = "detail-item-hero">
        <h2>Nombre:{hero.name}</h2>
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
        <Button onClick={handleDetail} className="btn_hero">
          Detalles
        </Button>
        <Button
          variant="danger"
          onClick={hamdleRemoveHero}
          className="btn_hero"
        >
          Eliminar
        </Button>
      </div>
    </div>
  );
};

export default ItemHeroTeam;
