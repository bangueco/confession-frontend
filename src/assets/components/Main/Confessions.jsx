import './Confessions.css'
import { useState, useEffect } from 'react'
import confessionsServices from '../../services/confessions'
import ConfessionCard from './ConfessionCard'
import SendConfession from '../SendConfession/SendConfession'

const Confessions = () => {

  const [confessions, setConfessions] = useState([])

  useEffect(() => {
    confessionsServices.getAll()
    .then(data => setConfessions(data))
    .catch(error => console.error(error))
  }, [confessions])

  return (
    <>
      <section id="confession-input">
        <SendConfession
          state={{confessions, setConfessions}}
        />
      </section>
      <section id='confessions'>
        {confessions && confessions.map((confe, index) => 
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