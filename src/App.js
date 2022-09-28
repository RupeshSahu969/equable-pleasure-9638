import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Tracker } from './Pages/Tracker/Tracker';

function App() {
  return (
    <Routes>
      <Route path='/tracker' element={<Tracker />} />
    </Routes>
  );
}

export default App;
