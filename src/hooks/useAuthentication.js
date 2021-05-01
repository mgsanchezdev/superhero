import { useState } from 'react';

const useAuthentication = () => {
  const existingData = JSON.parse(localStorage.getItem('userData'));
  const [userData, setUserData] = useState(existingData);

  const login = (data) => {
    localStorage.setItem('userData', JSON.stringify(data));
    setUserData(data);
  };

  const logout = () => {
    localStorage.removeItem('userData');
    setUserData();
  };

  const isLoggedIn = () => {
    if (!userData || !userData.token) return false;
    const { token } = userData;
    return token;
  };

  return { login, logout, isLoggedIn };
};

export default useAuthentication;
