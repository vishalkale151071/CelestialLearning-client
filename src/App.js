import Header from './Components/Website/Header'
import CourseCard from './Components/Utils/CourseCard'
import './App.css' ; 
import {BrowserRouter as Router  , Switch , Route} from 'react-router-dom' ;

// import UserLogin from './Components/Website/UserLogin' ;
// import UserSignUp from './Components/Website/UserSignUp' ;
// import UserVerify from './Components/Website/UserVerify' ;

function App() {
    return(
     <div className="app"> 
          <Router>
          
          <Header /> 

                         
          <div className = "main">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />


          </div>
          </Router>
          
     </div>
    )
    
}

export default App;
