import React from 'react';

import {
  AboutApp,
  Blog,
  Footer,
  Header,
  Possibility,
  Features,
} from './containers';

import { CTA, Brand, Navbar } from './components';
import './app.css';

const App = () => {
  return (
    <div className='App'>
      <div class='gradient__bg'>
        <Navbar />
        <Header />
      </div>

      <Brand />
      <AboutApp />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
