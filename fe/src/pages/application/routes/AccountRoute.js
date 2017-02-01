import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import Account from '../account'

export default function RootPageRoute () {
  return (
    <Route path="/account">
      <Route path="edit" component={Account.Edit}></Route>
      <Route path="settings" component={Account.Settings}></Route>
    </Route>
  )
}
