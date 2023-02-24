import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Carousel from './components/Explore/Carousel';
import AlbumPage from './pages/album';
import ExplorePage from './pages/explore';

import LayoutPage from './pages/layout';
import { ROUTER } from './router';
import './styles/globals.scss';
function App() {
  return (
    <Routes>
      <Route element={<LayoutPage />}>
        <Route path={ROUTER.INDEX} element={<ExplorePage />}></Route>
        <Route path={ROUTER.ALBUM} element={<AlbumPage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
