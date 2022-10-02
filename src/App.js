import './App.css';
import { InnerMainRoute } from './Pages/InnerMainRoute';
import MainRoute from './Pages/MainRoute';

function App() {
  let isAuth = true
  return (
    <div>
      {
        !isAuth ? (<MainRoute />) : (<InnerMainRoute />)
      }
    </div>
  );
}
export default App;