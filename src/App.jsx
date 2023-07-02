import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Streanime from './pages/Streanime';

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/signup" element={<Signup/>}/>
        <Route exact path="/" element={<Streanime/>}/>
      </Routes>
    </BrowserRouter>
  );
}