import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import Post from '../posts'

export default function RootPageRoute () {
  return (
    <Route path="/posts">
      <Route path="new" component={Post.New}></Route>
      <Route path="edit" component={Post.New}></Route>
      <Route path=":id" component={Post.Show}></Route>
    </Route>
  )
}
