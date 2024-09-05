import React from 'react'
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import PageInitial from './pages/PageInitial';


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="PageI" element={ <PageInitial /> } />
    </Routes>
    </BrowserRouter>
  )
}

export default App