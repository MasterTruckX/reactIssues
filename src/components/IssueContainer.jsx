const IssueContainer = ({ url, id, title, user, status }) => {
  return (
    <tr>
      <td href={url}>{id}</td>
      <td>{title}</td>
      <td>{user}</td>
      <td>{status}</td>
    </tr>
  )
}

export default IssueContainer
