import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './bootstrap.min.css'
import Home from './pages/Home';
import Wishlist from './pages/Wishlist';
import Details from './pages/Details';
import Cart from './pages/Cart';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'
import { Route, Routes } from 'react-router-dom';

function App() {


  return (
    <>
       <Header/>
         <Routes>
          <Route>
          <Route path='/' element={<Home/>}/>
          <Route path='/details/:id' element={<Details/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/wish' element={<Wishlist/>}/>
          <Route path='/*' element={<Home/>}/>
          </Route>
         </Routes>
         <Footer/>
    </>
  )
}

export default App
