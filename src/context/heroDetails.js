import React from 'react';

export const HeroDetailsContext = React.createContext(null);

export const HeroDetailsProvider = ({ children }) => {
  const [hero, setHero] = React.useState(null);
  return (
    <HeroDetailsContext.Provider
      value={{
        hero,
        setHero: (h) => setHero(h),
      }}
    >
      {children}
    </HeroDetailsContext.Provider>
  );
};