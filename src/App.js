import Header from './Components/Utils/Header';
import CourseCard from './Components/Utils/CourseCard';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SubscriberLogin from './Components/Subscriber/SubscriberLogin';
import SubscriberSignup from './Components/Subscriber/SubscriberSignup';
import SubscriberVerify from './Components/Subscriber/SubscriberVerify';

import Home from "./Components/Utils/Home"
import AuthorLogin from './Components/Author/AuthorLogin';
import AuthorSignup from './Components/Author/AuthorSignup';
import AuthorVerify from './Components/Author/AuthorVerify';

function App() {
    return (
        <div className="app">
            <Router>
                <Router>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/subscriber/login" exact component={SubscriberLogin} />
                        <Route path="/subscriber/signup/" exact component={SubscriberSignup} />
                        <Route path="/subscriber/verify/:token" exact component={SubscriberVerify} />

                        <Route path="/author/login" exact component={AuthorLogin} />
                        <Route path="/author/signup" exact component={AuthorSignup} />
                        <Route path="/author/verify/:token" exact component={AuthorVerify} />

                    </Switch>
                    
                </Router>
            </Router>
        </div>
    );
}

export default App;
