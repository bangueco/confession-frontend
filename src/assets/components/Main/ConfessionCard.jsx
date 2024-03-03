const ConfessionCard = ({id, message, confession_number}) => {
  const card = {
    height: '80px',
    padding: '10px',
    backgroundColor: 'green',
    borderRadius: '10px'
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