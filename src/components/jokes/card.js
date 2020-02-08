import React from "react"
import "./card.css"

const Card = props => {
  const { joke } = props
  const renderJokes = () => {
    if (joke) {
      console.log("joke is ", joke)
      return (
        <div className="container">
          <div className="card-container">
            <div className="card">
              <figure className="front">
                <p>{joke.setup}</p>
              </figure>
              <figure className="back">
                <p>{joke.delivery}</p>
              </figure>
            </div>
          </div>
        </div>
      )
    } else {
      return <p>Not funny yet...</p>
    }
  }
  return <div>{renderJokes()}</div>
}

export default Card
