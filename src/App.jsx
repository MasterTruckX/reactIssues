import { useState, useEffect } from 'react'
import './App.css'

function App () {
  const [issue, setIssue] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/repos/facebook/react/issues')
  }, [])

  return (
    <>
      <h1>React Issues</h1>

    </>
  )
}

export default App
