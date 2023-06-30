import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home'
import Register from './components/Register';
import Login from './components/Login';
import { Provider } from 'react-redux';
import store from './redux/store';
import Cart from './components/Cart'
import Card from './components/Card'

const linksArray = ["Users","Category","Books","Cart"];

const App = () => {
  
  return (
    <>
 <Provider store={store}>
    <Router>
      <Navbar links= {linksArray}/>
       <Routes>
               <Route path = "/" element = {<Home/>}></Route>
               <Route path = "/home" element = {<Home/>}></Route>
               <Route  path = "/register" element = {<Register/>}></Route>
               <Route  path = "/login" element = {<Login/>}></Route>
               <Route path = "/cart" element = {<Cart/>}></Route>
               <Route path = "/card" element = {<Card/>}></Route>
      </Routes>
    </Router>
  </Provider>
  
</>
  );
};

export default App;
