import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home.js';
import FavList from './components/FavList/FavList.js';
import Navbar from './components/Navbar/Navbar.js';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favlist" element={<FavList />} /> 
      </Routes>
    </>
  );
}

export default App;
