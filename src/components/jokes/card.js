import React from "react"

function Card(props) {
  const { joke } = props
  console.log()
  const renderJokes = joke => {
    debugger
  }
  return (
    <div>
      <p>{renderJokes()}</p>
    </div>
  )
}

export default Card
