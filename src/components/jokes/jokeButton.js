import React from "react"

function JokeButton(props) {
  const { setJoke } = props
  const handleClick = async event => {
    event.preventDefault()
    //RESTful route has blacklistFlags query because some jokes are too dark...
    const url =
      "https://sv443.net/jokeapi/v2/joke/Dark?blacklistFlags=nsfw,racist,sexist&type=twopart"
    let response = await fetch(url)
    const data = await response.json()
    await setJoke(data)
  }

  return <button onClick={handleClick}>Humor Me!</button>
}

export default JokeButton
