import Header from './Components/Header';
import './App.css'
import {BrowserRouter as Router  , Switch , Route} from 'react-router-dom' ;
import UserLogin from './Components/UserLogin';
import UserSignUp from './Components/UserSignUp';
import UserVerify from './Components/UserVerify';
function App() {
    return(
     <div className="app">
          <div className= "app_header">
               <Header />
               <Router>
               <Switch>
                    <Route  path="/user/login" exact component={UserLogin}/>
                    <Route path = "/user/signup/" exact component ={UserSignUp}/>
                    <Route path = "/user/verify/:token" exact component={UserVerify}/>
               </Switch>
               </Router>
          </div>
     </div>
    )
    
}

export default App;
