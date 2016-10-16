// insert into index.js
import About from './About'
import Repos from './Repos'

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    {/* add the routes here */}
    <Route path="/repos" component={Repos}/>
    <Route path="/about" component={About}/>
  </Router>
), document.getElementById('app'))