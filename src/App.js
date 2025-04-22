import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Resto from './pages/Resto';

const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/resto' element={<Resto/>}/>
   </Routes>
   </BrowserRouter>
  );
};

export default App;