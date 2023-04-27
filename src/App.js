import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Slider from './components/Slider';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/slider' element={<Slider/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
