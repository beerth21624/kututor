import React, { useState, useEffect } from 'react'
import Navbar from '../../components/navbar/Navbar'
import './styleSheet/home.css'

//DATA
import { tutorData } from '../../data'

//component
import Header from './components/Header'
import CardTutor from './components/CardTutor'

const Home = () => {
  console.log(tutorData)

  interface Tutor {
    id: number
    name: string
    subject: string
    price: number
    faculty: string
    description: string
    image: string
  }

  const [tutorArray, setTutorArray] = useState<Tutor[]>([])

  useEffect(() => {
    setTutorArray(tutorData)
  }, [])

  function filterTutor(type: string): void {
    if (type === 'All') return setTutorArray(tutorData)
    const filterTutor = tutorData.filter((tutor) => tutor.subject === type)
    setTutorArray(filterTutor)
  }

  return (
    <div>
      <Navbar />
      <Header />
      <div className="category_container">
        <div
          className="category"
          onClick={() => {
            filterTutor('All')
          }}
        >
          <h3>All</h3>
        </div>
        <div
          className="category"
          onClick={() => {
            filterTutor('Math')
          }}
        >
          <h3>Math</h3>
        </div>
        <div
          className="category"
          onClick={() => {
            filterTutor('Science')
          }}
        >
          <h3>Science</h3>
        </div>
        <div
          className="category"
          onClick={() => {
            filterTutor('English')
          }}
        >
          <h3>English</h3>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="card_container">
          {tutorArray.map((tutor) => (
            <CardTutor key={tutor.id} dataTutor={tutor} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
