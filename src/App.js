import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import './App.css';
import NavBar from './Components/NavBar';
import AboutUs from './Pages/AboutUsPage';
import CategoriesPage from './Pages/CategoriesPage';
import Home from './Pages/Home';

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <NavBar/>

        </div>
        
        <Routes>
          <Route path ='/' element={<Home/>}/>
          <Route path ='/about' element={<AboutUs/>}/>
          <Route path='/categories' element={<CategoriesPage/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
