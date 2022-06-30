import React from 'react'
import Featured from '../../components/featured/featured'
import Header from '../../components/header/header'
import Navbar from '../../components/navbar/navbar'
import './home.css'

const Home = () => {
  return (
    <div>
        <Navbar/>
    <Header/>
    <div className="homeContainer">
    <Featured/>
    
    </div>
    
    </div>
    
  )
}

export default Home