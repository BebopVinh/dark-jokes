import React from "react"
import "./card.css"

const Card = props => {
  const { joke, setJoke } = props

  const handleClick = async event => {
    event.preventDefault()
    //RESTful route has blacklistFlags query because some jokes are too dark...
    const url =
      "https://sv443.net/jokeapi/v2/joke/Dark?blacklistFlags=nsfw,racist,sexist&type=twopart"
    let response = await fetch(url)
    const data = await response.json()
    await setJoke(data)
  }

  const renderJokes = () => {
    if (joke) {
      console.log("joke is ", joke)
      return (
        <div className="container">
          <div className="card-container">
            <div className="card" onClick={handleClick}>
              <figure className="front">
                <p>{joke.setup}</p>
                <footer>Flip Me!</footer>
              </figure>
              <figure className="back">
                <p>{joke.delivery}</p>
                <footer>Another?</footer>
              </figure>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <p>Not funny yet...</p>
        </div>
      )
    }
  }
  return <div>{renderJokes()}</div>
}

export default Card
