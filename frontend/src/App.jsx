import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [jokes, setjokes] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes')
      .then((res) => {
        setjokes(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
  })
  return (
    <div>
      <h1>Pavan Jokes</h1>
      <p>JOKES : {jokes.length}</p>

      {
        jokes.map((joke, index) => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <h2>{joke.Content}</h2>
          </div>
        ))
      }
    </div>
  )
}

export default App
