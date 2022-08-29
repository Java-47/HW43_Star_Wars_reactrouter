import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { defaultHero } from './utils/constants';
import { HeroContext } from './utils/context';
const App = props => {
  const [hero, setHero] = useState(defaultHero);

  return (
    <HeroContext.Provider
        value={{
          hero,
          setHero,
        }}>
    <div className="container-fluid">
      <Header hero={hero} />
      <Main changeHero={setHero} />
      <Footer />
    </div>
    </HeroContext.Provider>
  );


}

export default App;
