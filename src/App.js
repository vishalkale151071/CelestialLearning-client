import Header from './Components/Utils/Header';
import CourseCard from './Components/Utils/CourseCard';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserLogin from './Components/Subscriber/subscriberLogin';
import UserSignUp from './Components/Subscriber/subscriberSignup';
import UserVerify from './Components/Subscriber/subscriberVerify';
import AuthorLogin from "./Components/Author/authorLogin";
import AuthorSignup from "./Components/Author/authorSignup"
import Home from "./Components/Utils/Home"

function App() {
    return (
        <div className="app">
            <Router>
                <Router>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/subscriber/login" exact component={UserLogin} />
                        <Route path="/subscriber/signup/" exact component={UserSignUp} />
                        <Route path="/user/verify/:token" exact component={UserVerify} />

                        <Route path="/author/login" exact component={AuthorLogin} />
                        <Route path="/author/signup" exact component={AuthorSignup} />

                    </Switch>
                    
                </Router>
            </Router>
        </div>
    );
}

export default App;
