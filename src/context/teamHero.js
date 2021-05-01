/* eslint-disable radix */
/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import { messageAlert } from '../utils/alerts';

export const TeamHeroContext = React.createContext(null);

export const TeamHeroProvider = ({ children }) => {
  const [teamHero, setTeanHero] = useState([]);
 
  const combateAcumulada = () => {
    return teamHero.reduce((acumulador, hero) => {
      return acumulador + parseInt(hero.powerstats.combat);
    }, 0);
  };


  const poderAcumulada = () => {
    return teamHero.reduce((acumulador, hero) => {
      return acumulador + parseInt(hero.powerstats.power);
    }, 0);
  };


  const durabilidadAcumulada = () => {
    return teamHero.reduce((acumulador, hero) => {
      return acumulador + parseInt(hero.powerstats.durability);
    }, 0);
  };

  const velocidadAcumulada = () => {
    return teamHero.reduce((acumulador, hero) => {
      return acumulador + parseInt(hero.powerstats.speed);
    }, 0);
  };

  const fuerzaAcumulada = () => {
    return teamHero.reduce((acumulador, hero) => {
      return acumulador + parseInt(hero.powerstats.strength);
    }, 0);
  };

  const inteligenciaAcumulada = () => {
    return teamHero.reduce((acumulador, hero) => {
      return acumulador + parseInt(hero.powerstats.intelligence);
    }, 0);
  };

  const pesoPromedio = () => {
    const totalPeso = teamHero.reduce((acumulador, hero) => {
      return acumulador + parseInt(hero.appearance.weight[1]);
    }, 0);

    const totalTeam = teamHero.length;

    return Math.round(totalPeso / totalTeam);
  };

  const alturaPromedio = () => {
    const totalPeso = teamHero.reduce((acumulador, hero) => {
      return acumulador + parseInt(hero.appearance.height[1]);
    }, 0);

    const totalTeam = teamHero.length;

    return Math.round(totalPeso / totalTeam);
  };

  const teamOrientacionBuena = () => {
    return teamHero.reduce((acumulador, hero) => {
      return hero.biography.alignment === 'good' ? acumulador + 1 : acumulador;
    }, 0);
  };

  const teamOrientacionMale = () => {
    return teamHero.reduce((acumulador, hero) => {
      return hero.biography.alignment === 'bad' ? acumulador + 1 : acumulador;
    }, 0);
  };

  const addHeroTeam = (hero) => {
    if (teamHero.length !== 6) {
      if (hero.biography.alignment === 'good') {
        const orientaBuena = teamOrientacionBuena();
        if (orientaBuena < 3) {
          const newTeam = [...teamHero, hero];
          setTeanHero(newTeam);
        } else {
          messageAlert(
            'error',
            'No puede agregar mas de 3 heroes al equipo con orientaciones buenas'
          );
        }
      } else {
        const orientaMala = teamOrientacionMale();
        if (orientaMala < 3) {
          const newTeam = [...teamHero, hero];
          setTeanHero(newTeam);
        } else {
          messageAlert(
            'error',
            'No puede agregar mas de 3 heroes al equipo con orientaciones malas'
          );
        }
      }
    } else {
      messageAlert('error', 'No puede agregar mas de 6 heroes al equipo');
    }
  };

  const removeHeroTeam = (id) => {
    const newTeamHero = teamHero.filter((hero) => hero.id !== id);
    setTeanHero(newTeamHero);
  };

  const isInTeam = (id) => {
    const findItem = teamHero.find((hero) => hero.id === id);
    // eslint-disable-next-line no-unneeded-ternary
    return findItem ? true : false;
  };

  const deleteTeam = ()=>{
    setTeanHero([]);
  }
  return (
    <TeamHeroContext.Provider
      value={{
        teamHero,
        isInTeam,
        removeHeroTeam,
        addHeroTeam,
        pesoPromedio,
        alturaPromedio,
        inteligenciaAcumulada,
        fuerzaAcumulada,
        velocidadAcumulada,
        durabilidadAcumulada,
        poderAcumulada,
        combateAcumulada,
        deleteTeam
      }}
    >
      {children}
    </TeamHeroContext.Provider>
  );
};
