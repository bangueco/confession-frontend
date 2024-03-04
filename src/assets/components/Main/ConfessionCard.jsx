const ConfessionCard = ({id, message, confession_number}) => {
  const card = {
    padding: '10px',
    backgroundColor: '#395B64',
    color: 'white',
    borderRadius: '10px',
    boxShadow: '10px, 20px, 500px #888888'
  }

  return (
    <>
      <div style={card} key={id}>
        <h1>Confession #{confession_number}</h1>
        <div>{message}</div>
      </div>
    </>
  )
}

export default ConfessionCard