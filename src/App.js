
import './App.css';
import Display from './Components/Display';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>        
        <Route exact path='/' element={<Display/>} />        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
