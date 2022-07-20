// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/HomePage';
import Links from './pages/LinksPage';
import TestProgress from './components/TestProgress';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircleDot, faFireFlameCurved, faTruck, faWarehouse, faMagnifyingGlass, faBasketShopping, faStar, faStarHalfStroke, faChevronRight, faMoneyCheck, faShareNodes, faGhost} from '@fortawesome/free-solid-svg-icons';
import { faLightbulb, faFaceGrinStars, faCircleQuestion} from '@fortawesome/free-regular-svg-icons';
import React from "react";
import {
  BrowserRouter as Routers, Routes, Route, Outlet,
} from "react-router-dom";

/*
* /home
* /links
* /test/{testId}/stages/{stageId}
* /results/{testId}
*/


library.add(faCircleQuestion, faLightbulb, faCircleDot, faFireFlameCurved, faTruck, faWarehouse, faMagnifyingGlass, faBasketShopping, faStar, faStarHalfStroke, faChevronRight, faMoneyCheck, faShareNodes, faGhost, faFaceGrinStars)

function App() {
  return (
    <div>
      <Routers>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="links" element={<Links />} />
              <Route path='test/:testId/stage/:stageId' element={<Test />} />
              <Route path="*" element={<p>There's nothing here: 404!</p>} />
            </Route>
          </Routes>
      </Routers>
    </div>
  );
}

const Layout = () => {
  return (
    <>
      <NavBar />
      <main className='h-full'>
        <Outlet />
      </main>
    </>
  );
};


const Test = () => {
  return (
      <TestProgress />
  );
};

export default App;
