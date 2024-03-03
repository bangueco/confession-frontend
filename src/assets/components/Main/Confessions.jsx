import './Confessions.css'
import { useState, useEffect } from 'react'
import confessionsServices from '../../services/confessions'
import ConfessionCard from './ConfessionCard'

const Confessions = () => {

  const [confessions, setConfessions] = useState([])

  useEffect(() => {
    confessionsServices.getAll()
    .then(data => setConfessions(data))
  }, [])

  return (
    <>
      <section id='confessions'>
        {confessions.map((confe, index) => 
          <ConfessionCard 
            key={confe._id} 
            id={confe._id}
            confession_number={index + 1}
            message={confe.message} 
          />)}
      </section>
    </>
  )
}

export default Confessions