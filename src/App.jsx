import { useState } from 'react'
// import React from "react"
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
            // adding a prop called key set to sth unique about this individual item. Here everything is uique (except rating) but in order for it to work no matter what's the set up --> use the id of the item
            key={item.id}
            img={item.coverImg}
            rating={item.stats.rating}
            reviewCount={item.stats.reviewCount}
            location={item.location}
            title={item.title}
            // description={item.description}
            price={item.price}
            openSpots={item.openSpots}
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
