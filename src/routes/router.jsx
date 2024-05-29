import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { DefaultLayout } from '../layouts/DefaultLayout';
import Home from '../pages/Home/index';
import Recados from '../pages/Recados/index';

export function Router() {
 return (
  <>
   <Routes>
    <Route path='/' element={<DefaultLayout/>}>
     <Route path='/' element={<Home/>}/>
     <Route path='/recados' element={<Recados/>}/>
    </Route>
   </Routes>
  </>
 )
}