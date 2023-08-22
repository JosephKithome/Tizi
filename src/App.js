import React from 'react';
import { Route, Routes } from 'react-router-dom'

import {Box} from '@mui/material'
import ExerciseDetail from './components/pages/ExerciseDetail';
import Home from './components/pages/Home';
import Footer from './components/pages/Footer';
import './App.css';
import NavBar from './components/NavBar';
function App() {
  return (
    <Box width='400px' sx={{width: {xl: '1488px'}}} m='auto'>

      <NavBar/>
      <Routes>
        <Route name='home' path='/' element={<Home/>} />
        <Route path='/execersise/:id' element={<ExerciseDetail/>} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
