import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SubscriberLogin from './Components/Subscriber/SubscriberLogin';
import SubscriberSignUp from './Components/Subscriber/SubscriberSignup';
import SubscriberVerify from './Components/Subscriber/SubscriberVerify';
import SubscriberProfile from "./Components/Subscriber/SubscriberProfile"
import SubscriberDashboard from "./Components/Subscriber/SubscriberDashboard"
import SubscriberSettings from "./Components/Subscriber/SubscriberSettings"
import AuthorLogin from './Components/Author/AuthorLogin';
import AuthorSignup from './Components/Author/AuthorSignup';
import Home from './Components/Utils/Home';

function App() {
    return (
        <div className="app">
            <Router>
                <Router>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/subscriber/login" exact component={SubscriberLogin} />
                        <Route path="/subscriber/signup/" exact component={SubscriberSignUp} />
                        <Route path="/user/verify/:token" exact component={SubscriberVerify} />
                        <Route path="/subscriber/profile" exact component={SubscriberProfile} />
                        <Route path="/subscriber/dashboard" exact component={SubscriberDashboard} />
                        <Route path="/subscriber/settings" exact component={SubscriberSettings} />


                        <Route path="/author/login" exact component={AuthorLogin} />
                        <Route path="/author/signup" exact component={AuthorSignup} />
                    </Switch>
                </Router>
            </Router>
        </div>
    );
}

export default App;
