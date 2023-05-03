import { useState, useEffect } from 'react'
import './App.css'
import IssueContainer from './components/IssueContainer'

function App () {
  const [issues, setIssues] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/repos/facebook/react/issues')
      .then(res => res.json())
      .then(results => {
        setIssues(results)
      }).catch(err => console.log(err))
  }, [])
  return (
    <>
      <div>
        <h1>React Issues</h1>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>User</th>
            </tr>
          </thead>
          <tbody>{
            issues.map(issue => (
              <IssueContainer
                key={issue.id}
                url={issue.html_url}
                id={issue.id}
                title={issue.title}
                user={issue.user.login}
              />
            ))
          }
          </tbody>
        </table>
      </div>

    </>
  )
}

export default App
