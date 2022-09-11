import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import Card from '../components/Card.jsx'



import React from "react"

/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

export default function App() {
    return (
      <div>
        <Navbar/>
        <div className='container'>
          <Hero/>
          <Card
            img="swim.png"
            rating={5}
            reviewCount={6}
            country="Canada"
            firstName = "Katie Zaferes"
            title="Life Lessons with {firstName}"
            price={136}
          />
        </div>
      </div>
    )
}
