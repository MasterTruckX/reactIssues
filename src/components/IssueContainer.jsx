const IssueContainer = ({ url, id, title, user }) => {
  return (
    <tr>
      <td>{id}</td>
      <td href={url}>{title}</td>
      <td>{user}</td>
    </tr>
  )
}

export default IssueContainer
