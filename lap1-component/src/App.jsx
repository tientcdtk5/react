import { useState } from 'react'
import './styles.css'
import "bootstrap-icons/font/bootstrap-icons.min.css";
import Navbar from './components/Navbar';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';
function App() {
  

  return (
    <div className='App'>
      <Navbar/>
      <Header/>
      <Section/>
      <Footer/>
    </div>
  )
}

export default App
