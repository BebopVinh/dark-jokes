import React, { useState } from "react"
import Card from "./card"
import JokeButton from "./jokeButton"

const JokeContainer = () => {
  const [joke, setJoke] = useState("")
  return (
    <>
      {!(joke === "") ? <Card joke={joke} /> : "Not funny yet..."}
      <JokeButton setJoke={setJoke} />
    </>
  )
}

export default JokeContainer
