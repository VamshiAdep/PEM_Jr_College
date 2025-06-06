import React from 'react'
import'./DegreeCollegeHero.css'
import dark_arrow from '../../assets/dark_arrow.png'

const DegreeCollegeHero = () => {
  return (
    <div className='Hero container'>
      <div className="hero-text">
        <h1>We Ensure better education for a better world</h1>
        <p>The more that you read, the more things you will know, the more that you learn, the more places you'll go</p>
        <button className='btn'> Explore More <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default DegreeCollegeHero
