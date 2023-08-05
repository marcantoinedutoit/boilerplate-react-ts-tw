import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import 'animate.css/animate.css';
import 'assets/css/globals.css';
import { About } from 'pages/about';
import { Home } from 'pages/home';

import { Footer } from 'features/ui/footer/Footer';
import { Header } from 'features/ui/header/Header';

const App = () => {
  return (
    <BrowserRouter>
      <div className='layout dark:bg-primary-custom dark:text-white min-h-max'>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};
export default App;
