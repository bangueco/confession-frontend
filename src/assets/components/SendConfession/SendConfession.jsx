import { useState } from "react"
import confessions from "../../services/confessions"

const SendConfession = (props) => {
  
  const [message, setMessage] = useState('')

  const onSubmitConfession = (e) => {
    e.preventDefault()
    confessions.sendConfession(message)
    .then(confession => {
      props.state.setConfessions(confession.data)
      setMessage('')
    })
    .catch(error => console.error(error.response.data.error))
  }

  const handleMessageInputChange = (e) => {
    setMessage(e.target.value)
  }

  return(
    <>
      <form onSubmit={onSubmitConfession}>
        <div>
          Message: <input type="text" onChange={handleMessageInputChange} value={message}/>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default SendConfession