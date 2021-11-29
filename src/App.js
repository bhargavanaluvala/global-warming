import './App.css';
import Login from './components/Login';
import Register from './components/Register'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={'/'} component={Login} />
          <Route exact path={'/register'} component={Register} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;
