import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SubscriberLogin from './Components/Subscriber/subscriberLogin';
import SubscriberSignUp from './Components/Subscriber/subscriberSignup';
import SubscriberVerify from './Components/Subscriber/subscriberVerify';
import SubscriberProfile from "./Components/Subscriber/subscriberProfile"
import SubscriberDashboard from "./Components/Subscriber/subscriberDashborad"
import SubscriberSettings from "./Components/Subscriber/subscriberSettings"
import AuthorLogin from './Components/Author/authorLogin';
import AuthorSignup from './Components/Author/authorSignup';
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
