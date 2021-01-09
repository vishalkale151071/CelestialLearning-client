import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SubscriberLogin from './Components/Subscriber/SubscriberLogin';

import SubscriberSignup from './Components/Subscriber/SubscriberSignup';
import SubscriberVerify from './Components/Subscriber/SubscriberVerify';
import SubscriberProfile from './Components/Subscriber/SubscriberProfile';
import SubscriberDashboard from './Components/Subscriber/SubscriberDashboard';
import SubscriberSettings from './Components/Subscriber/SubscriberSettings';
import SubscriberForgetPassword from './Components/Subscriber/SubscriberForgetPassword';

import AuthorLogin from './Components/Author/AuthorLogin';
import AuthorSignup from './Components/Author/AuthorSignup';
import AuthorVerify from './Components/Author/AuthorVerify';
import AuthorProfile from './Components/Author/AuthorProfile';
import AuthorDashboard from './Components/Author/AuthorDashboard';
import AuthorSettings from './Components/Author/AuthorSettings';
import AuthorForgetPassword from './Components/Author/AuthorForgetPassword';

import Home from './Components/Utils/Home';
import { useEffect } from 'react';

function App() {

    const isSubscriber = localStorage.getItem('isSubscriber')
  //  const history1 = useHistory()

    // useEffect(() => {
    //     if(isSubscriber){
    //         history.push('/subscriber/dashboard')
    //     }
    // } , [])
    return (
        <div className="app">
            <Router>
                <Router>
                    <Switch>


                        <Route path="/" exact component={Home} />

                        <Route path="/subscriber/login" exact component={SubscriberLogin} />
                        <Route path="/subscriber/signup/" exact component={SubscriberSignup} />
                        <Route path="/subscriber/dashboard/" exact component={SubscriberDashboard} />
                        <Route path="/subscriber/profile/" exact component={SubscriberProfile} />
                        <Route path="/subscriber/settings/" exact component={SubscriberSettings} />
                        <Route path="/subscriber/forgetpassword/" exact component={SubscriberForgetPassword} />
                        <Route path="/subscriber/verify/:token" exact component={SubscriberVerify} />

                        <Route path="/author/login" exact component={AuthorLogin} />
                        <Route path="/author/signup" exact component={AuthorSignup} />
                        <Route path="/author/dashboard/" exact component={AuthorDashboard} />
                        <Route path="/author/profile/" exact component={AuthorProfile} />
                        <Route path="/author/settings/" exact component={AuthorSettings} />
                        <Route path="/author/forgetpassword/" exact component={AuthorForgetPassword} />
                        <Route path="/author/verify/:token" exact component={AuthorVerify} />
                    </Switch>
                </Router>
            </Router>
        </div>
    );
}

export default App;
