import React from 'react'

//style sheet
import '../styleSheet/home.css'

const Header = () => {
  //click get started button to slide down to the card tutor section
  const clickToSlide = () => {
    const cardTutor = document.querySelector('.card_container')
    cardTutor?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="header_container">
      <h3>Find the perfect tutor for your academic success!</h3>
      <button className="btn btn-primary" onClick={clickToSlide}>
        Get Started
      </button>
    </div>
  )
}

export default Header
