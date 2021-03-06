import React, { useState, useEffect } from 'react';
import './css/main.css';
import 'bootstrap/dist/css/bootstrap.css';
import Sitebar from './home/Navbar';
import Auth from './auth/Auth';
import RatingIndex from './ratings/RatingIndex';


function App() {

  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if(localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }

  const protectedViews = () => {
    return (sessionToken === localStorage.getItem('token') ? <RatingIndex token={sessionToken}/>
    : <Auth updateToken={updateToken}/>)
  }

  return (
    <div>
      {sessionToken ? <Sitebar clickLogout={clearToken}/> : null}
      {protectedViews()}
    </div>
  );
}

export default App;
