const IssueContainer = ({ url, id, title, user }) => {
  return (
    <tr>
      <td>{id}</td>
      <td><a href={url} target='_blank' rel='noreferrer'>{title}</a></td>
      <td> by {user}</td>
    </tr>
  )
}

export default IssueContainer
