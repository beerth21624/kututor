import React, { useState, useEffect } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Swal from 'sweetalert2'
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
    line: string
  }

  const [tutorArray, setTutorArray] = useState<Tutor[]>([])
  const [modePage, setModePage] = useState<string>('All')

  useEffect(() => {
    setTutorArray(tutorData)
    Swal.fire({
      title: 'Warning!',
      text: 'This website is under development',
      icon: 'warning',
      confirmButtonText: 'Cool'
    })
   
  }, [])

  function filterTutor(type: string): void {
    if (type === 'All') {
      setTutorArray(tutorData)
      setModePage('All')
      return
    }
    const filterTutor = tutorData.filter((tutor) => tutor.subject === type)
    setTutorArray(filterTutor)
    setModePage(type)
  }

  return (
    <div>
      <Navbar />
      <Header />
      <div className="category_container">
        <div
          className={`category ${modePage === 'All' ? 'active' : ''}`}
          onClick={() => {
            filterTutor('All')
          }}
        >
          <h3>All</h3>
        </div>
        <div
          className={`category ${modePage === 'Math' ? 'active' : ''}`}
          onClick={() => {
            filterTutor('Math')
          }}
        >
          <h3>Math</h3>
        </div>
        <div
          className={`category ${modePage === 'Science' ? 'active' : ''}`}
          onClick={() => {
            filterTutor('Science')
          }}
        >
          <h3>Science</h3>
        </div>
        <div
          className={`category ${modePage === 'English' ? 'active' : ''}`}
          onClick={() => {
            filterTutor('English')
          }}
        >
          <h3>English</h3>
        </div>
      </div>
      <div className="tutor_title">
        <h1 className="text-center">Tutor List ({tutorArray.length})</h1>
      </div>
      <div className="d-flex justify-content-center">
        <div className="card_container">
          {tutorArray.map((tutor) => (
            <CardTutor key={tutor.id} dataTutor={tutor} />
          ))}
        </div>
      </div>
      <div className="footer">
        {/* copyright */}
        <div className="text-center">
          <p>© 2021 KU TUTOR. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Home
