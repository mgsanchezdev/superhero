import React from 'react';
import { Button } from 'react-bootstrap';

import { TeamHeroContext } from '../../context/teamHero';

import './ItemHero.css';

const ItemHero = ({ hero }) => {
  const { addHeroTeam, isInTeam, removeHeroTeam } = React.useContext(
    TeamHeroContext
  );
  const handleAddHero = () => {
    addHeroTeam(hero);
  };

  const handleRemoveHero = () => {
    removeHeroTeam(hero.id);
  };
  return (
    <div className="container-heroo">
      <img src={hero.image.url} alt={hero.name} />
      <div className="detailHero">
       <div className = "detail-hero-titles">
        <h2>{hero.name}</h2>
        <h2>{hero.biography.alignment}</h2>
        </div>
        {isInTeam(hero.id) ? (
          <Button
            variant="danger"
            onClick={handleRemoveHero}
            className="btn_herooo_eliminar"
          >
            Eliminar
          </Button>
        ) : (
          <Button onClick={handleAddHero} className="btn_herooo">
            Agregar al equipo
          </Button>
        )}
      </div>
    </div>
  );
};
export default ItemHero;
