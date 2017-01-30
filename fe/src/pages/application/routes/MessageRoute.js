import Message from 'pages/messages'

export default function MessageRoutes () {
  return (
    <Route path="/messages">
      <Route path=":id" component={Message.Show}></Route>
      <Route path="new" component={Message.New}></Route>
      <Route path="edit" component={Message.Edit}></Route>
    </Route>
  )
}
