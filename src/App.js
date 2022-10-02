import { useSelector } from 'react-redux';
import './App.css';
import { InnerMainRoute } from './Pages/InnerMainRoute';
import MainRoute from './Pages/MainRoute';

function App() {
  const auth = useSelector((state)=>state.auth)
  return (
    <div>
      {
        !auth ? (<MainRoute />) : (<InnerMainRoute />)
      }
    </div>
  );
}
export default App;