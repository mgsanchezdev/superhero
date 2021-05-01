import React from 'react';
import { TeamHeroContext } from '../../context/teamHero';
import ItemHeroTeam from '../../Component/ItemHeroTeam/ItemHeroTeam';
import './home.css';

const Home = () => {
  const {
    teamHero,
    pesoPromedio,
    alturaPromedio,
    inteligenciaAcumulada,
    fuerzaAcumulada,
    velocidadAcumulada,
    durabilidadAcumulada,
    poderAcumulada,
    combateAcumulada,
  } = React.useContext(TeamHeroContext);

  return (
    <>
      {teamHero.length === 0 ? (
        <h1 className="titleTeam">No hay integrantes en el equipo</h1>
      ) : (
        <h1 className="titleTeam">Integrantes del equipo</h1>
      )}
      <div className="container-itemHeroTeam">
        {teamHero.map((hero) => (
          <ItemHeroTeam key={hero.id} hero={hero} />
        ))}
      </div>
      {teamHero.length !== 0 && (
        <div className = "detalles-habilidades">
          <h2 className = "titulo-habilidades">Detalle de las habilidades del equipo</h2>
          <h2>Peso promedio del equipo: {pesoPromedio()} kg</h2>
          <h2>Altura promedio del equipo: {alturaPromedio()} cm </h2>
          <h2>Inteligencia acumulada del equipo: {inteligenciaAcumulada()} </h2>
          <h2>Fuerza acumulada del equipo: {fuerzaAcumulada()} </h2>
          <h2>Velocidad acumulada del equipo: {velocidadAcumulada()} </h2>
          <h2>Durabilidad acumulada del equipo: {durabilidadAcumulada()} </h2>
          <h2>Poder acumulado del equipo: {poderAcumulada()} </h2>
          <h2>Combate acumulado del equipo: {combateAcumulada()} </h2>
        </div>
      )}
    </>
  );
};
export default Home;
