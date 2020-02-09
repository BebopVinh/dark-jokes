import React, { useState } from "react"
import Card from "./card"
import JokeButton from "./jokeButton"

const JokeContainer = () => {
  const [joke, setJoke] = useState(null)

  return (
    <>
      {joke ? (
        <Card joke={joke} setJoke={setJoke} />
      ) : (
        <div>
          <p>Not funny yet...</p>
          <br />
          <JokeButton setJoke={setJoke} />
        </div>
      )}
    </>
  )
}

export default JokeContainer
