import React, { useState } from "react"
import Card from "./card"
import JokeButton from "./jokeButton"

const JokeContainer = () => {
  const [joke, setJoke] = useState(null)

  return (
    <>
      {/* {joke ? <Card {...joke} /> : <p>"Not funny yet..."</p>} */}
      <Card joke={joke} />
      <JokeButton setJoke={setJoke} />
    </>
  )
}

export default JokeContainer
