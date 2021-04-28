import React,{useState} from 'react';

export const TeamHeroContext = React.createContext(null);

export const TeamHeroProvider = ({ children }) => {
  const [teanHero, setTeanHero] = React.useState(null);
  const [orintacionBuena,SetOrintacionBuena] = useState(0);
  const [orintacionMala,SetOrintacionMala] = useState(0);
  const [pesoPromedio,setPesoPromedio] = useState(0);
  const [alturaPromedio,setAlturaPromedio] = useState(0);
  const [powerstatsAcumulado, setPowerstatsAcumulado] = useState(0);


  return (
    <TeamHeroContext.Provider
      value={{
        teanHero,
        orintacionBuena,
        orintacionMala,
        pesoPromedio,
        alturaPromedio,
        powerstatsAcumulado
      }}
    >
      {children}
    </TeamHeroContext.Provider>
  );
};
