import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faGrip, faHouse, faCheckSquare, faPhone, fas } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope, faUser, faFile, far } from '@fortawesome/free-regular-svg-icons';
import { faSkype, faLinkedinIn, faFacebookF, fab } from '@fortawesome/free-brands-svg-icons';


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Navigation from './components/Navigation';

library.add(fas, far, fab, faUser, faHouse, faCheckSquare, faEnvelope, faFile, faGrip, faPhone, faFacebookF, faLinkedinIn, faSkype)

const App = () => {
  return (
    <>
      <BrowserRouter>
          <div id="aside">
            <Navigation />
          </div>
          <div id="main">
            <Routes>
              <Route exact path="/mycv" element={<Home />} />
              <Route exact path="/a-propos" element={<About />} />
              <Route exact path="/experience" element={<Resume />} />
              <Route exact path="/portfolio" element={<Portfolio />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
      </BrowserRouter>
    </>
  );
};

export default App;
