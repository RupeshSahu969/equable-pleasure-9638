
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Tracker } from './Pages/Tracker/Tracker';

function App() {
  return (

<div className='app'>
    <Routes>
      <Route path='/tracker' element={<Tracker />} />
    </Routes>
    </div>
  );
}

export default App;
