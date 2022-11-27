import { useSelector } from 'react-redux';
import './App.css';
import Android from './Pages/Android';
import { InnerMainRoute } from './Pages/InnerMainRoute';
import MainRoute from './Pages/MainRoute';

function App() {
  const auth = useSelector((state)=>state.auth)
  // console.log(auth)
  return (
    <div>
      {
        !auth ? (<MainRoute />) : (<InnerMainRoute />)
      }
      {/* <Android/> */}
    </div>
  );
}
export default App;

