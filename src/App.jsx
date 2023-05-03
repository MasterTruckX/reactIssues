import { useState, useEffect } from 'react'
import './App.css'

function App () {
  const [issue, setIssue] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/repos/facebook/react/issues')
      .then(res => res.json())
      .then(results => {
        const { data } = results
        setIssue(data)
      }).catch(err => console.log(err))
  }, [])

  return (
    <>
      <h1>React Issues</h1>
      <table>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>User</th>
        </tr>
        issue.map(issues => (
        

        ))
      </table>
    </>
  )
}

export default App
