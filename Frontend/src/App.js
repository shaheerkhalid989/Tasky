// import logo from './logo.svg';
import './App.css';
import Login from './Pages/LoginPage/loginPage.tsx';
import RegisterUser from './Pages/LoginPage/registerPage.tsx';
import Start from './Pages/startPage/StartPage.tsx';
import React from 'react';
import Home from './Pages/AfterLogin/HomePage.tsx'
import { BrowserRouter as Router, Route} from 'react-router-dom';


// function App() {
//   return (
//     <div className="App">
//       <Home/>
//     </div>
//   );
// }

const App = () => {
  return (
    <Router>
        <Route exact path="/" component={Start} />
        <Route path="/Login" component={Login} />
        <Route path="/Registration" component={RegisterUser} />
        <Route path = "/home" component={Home} />
    </Router>
  );
};


export default App;
