import { useState } from 'react'
import reactLogo from '../public/assets/react.svg'
import './App.css'
import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import Card from '../components/Card.jsx'
// Mapping experiences data into components:
import data from './data'



export default function App() {
  const cardElements = data.map(item => {
      return (
            <Card
            // adding a prop called key set to sth unique about this individual item.
            //Here everything is uique (except rating) but in order for it to work no matter what's the set up --> use the id of the item
            key={item.id}
            item={item}
            />
      )
  })
    return (
      <div>
        <Navbar/>
        <div className='container'>
          <Hero/>
          <section className="cards-list">
            {cardElements}
          </section>
        </div>
      </div>
    )
}
