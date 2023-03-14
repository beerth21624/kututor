import React from 'react'
import '../styleSheet/home.css'
//type props
type Props = {
  dataTutor: {
    id: number
    name: string
    subject: string
    price: number
    faculty: string
    description: string
    image: string
    line: string
  }
}

const CardTutor = ({
  dataTutor: { id, name, subject, price, faculty, description, image,line },
}: Props) => {
  return (
    <div className="card_tutor">
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        {/* tutor data */}
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          <b>subject :</b> {subject}
        </p>
        <p className="card-text">
          <b>price :</b> {price}
        </p>
        <p className="card-text">
          <b>faculty :</b> {faculty}
        </p>
        <p className="card-text">
          <b>description :</b> {description}
        </p>
         <p className="card-text">
          <b>line Id :</b> {line}
        </p>
      </div>
    </div>
  )
}

export default CardTutor
