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
import UploadCourse from './Components/Course/UploadCourse';

import CreateCourse from "./Components/Course/CreateCourse"
import CourseHome from "./Components/Course/CourseHome";
import CourseView from "./Components/Course/CourseView";
import SubscriberForgetVerify from './Components/Subscriber/SubscriberForgetVerify';
import SubscriberNewPassword from './Components/Subscriber/SubscriberNewPassword';
import SubscriberEmailVerify from './Components/Subscriber/SubscriberEmailVerify';
import AuthorForgetVerify from './Components/Author/AuthorForgetVerify';
import AuthorNewPassword from './Components/Author/AuthorNewPassword';
import AuthorEmailVerify from './Components/Author/AuthorEmailVerify';
import CreateTest from './Components/Tests/createTest';
import TestPreview from './Components/Tests/testPreview';
import CategoryCourses from './Components/Utils/CategoryCourses';
import Recharts from './Components/Utils/Recharts';
import AuthorLiveSession from './Components/Author/AuthorLiveSession';
import { Zoom } from './Components/LiveSession/Zoom';
import CourseFeedback from './Components/Course/CourseFeedback';
import AdminLogin from './Components/Admin/AdminLogin';
import AdminDashboard from './Components/Admin/AdminDashboard';
import AdminReview from './Components/Admin/AdminReview';
import AuthorOTP from './Components/Author/AuthorOTP';

function App() {
    return (
        <div className="app">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Tangerine"></link>
            <Router>
                <Router>
                    <Switch>
                        <Route path="/" exact component={Home} />

                        <Route path="/admin/login" exact component={AdminLogin} />
                        <Route path="/admin/dashboard" exact component={AdminDashboard} />
                        <Route path="/admin/review/:id" exact component={AdminReview} />

                        <Route path="/subscriber/login" exact component={SubscriberLogin} />
                        <Route path="/subscriber/signup/" exact component={SubscriberSignup} />
                        <Route path="/subscriber/dashboard/" exact component={SubscriberDashboard} />
                        <Route path="/subscriber/profile/" exact component={SubscriberProfile} />
                        <Route path="/subscriber/settings/" exact component={SubscriberSettings} />
                        <Route path="/subscriber/forgetpassword/" exact component={SubscriberForgetPassword} />
                        <Route path="/subscriber/verify/:token" exact component={SubscriberVerify} />
                        <Route path="/subscriber/forgetverify/:token" exact component={SubscriberForgetVerify} />
                        <Route path="/subscriber/forgetpasswordupdate" exact component={SubscriberNewPassword} />
                        <Route path="/subscriber/verify1/:token" exact component={SubscriberEmailVerify} />
                        <Route path="/subscriber/recharts" exact component={Recharts} />

                        <Route path="/author/login" exact component={AuthorLogin} />
                        <Route path="/author/signup" exact component={AuthorSignup} />
                        <Route path="/author/dashboard/" exact component={AuthorDashboard} />
                        <Route path="/author/profile/" exact component={AuthorProfile} />
                        <Route path="/author/settings/" exact component={AuthorSettings} />
                        <Route path="/author/forgetpassword/" exact component={AuthorForgetPassword} />
                        <Route path="/author/verify/:token" exact component={AuthorVerify} />
                        <Route path="/author/otpverify/:id" exact component={AuthorOTP} />
                        <Route path="/author/forgetverify/:token" exact component={AuthorForgetVerify} />
                        <Route path="/author/forgetpasswordupdate" exact component={AuthorNewPassword} />
                        <Route path="/author/verify1/:token" exact component={AuthorEmailVerify} />
                        <Route path = "/author/liveSession" exact component = {AuthorLiveSession}/>
                        <Route path="/author/uploadcourse" exact component={UploadCourse} />
                        <Route path="/author/recharts" exact component={Recharts} />
                        
                        <Route path="/course/create" exact component={CreateCourse} />
                        <Route path="/course/:courseTitle" exact component={CourseHome} />
                        <Route path="/course/view/:title" exact component={CourseView} />
                        <Route path="/course/feedback/:title" exact component={CourseFeedback} />
                        <Route path="/courses/:category" exact component={CategoryCourses} />
                        <Route path="/create-test" exact component= { CreateTest } />
                        <Route path="/test-preview/:courseName/:sectionName" exact component={ TestPreview } />
                       
                        

                    </Switch>
                </Router>
            </Router>
        </div>
    );
}

export default App;
