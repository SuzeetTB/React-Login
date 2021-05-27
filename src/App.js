import './App.css';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import { Login } from './Components/Login/Login';
import { Register} from './Components/SignUp/Register';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/login'><Login/></Route>
        <Route path='/register'><Register/></Route>
      </Switch>
    </Router>
  );
}

export default App;
