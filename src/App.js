import  Navbar  from './components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Cart from './components/Cart';


function App() {
  return (
 <BrowserRouter>  
   <Navbar/>
      <Routes>
       <Route path='/' element={<Home/>}/> 
       <Route path='cart' element={<Cart/>}/> 
      </Routes>
 </BrowserRouter>   
    
  );
}

export default App;
