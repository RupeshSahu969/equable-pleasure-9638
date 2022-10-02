import './App.css';
import NavbarLanding from './Components/NavbarLanding/NavbarLanding';
import { InnerMainRoute } from './Pages/InnerMainRoute';
import LandingPage from './Pages/LandingPage/LandingPage';
import MainRoute from './Pages/MainRoute';





function App() {
  let isAuth = true
  return (
    <div>
      {
        !isAuth ? (<MainRoute />) : (<InnerMainRoute />)
      }

      {/* <NavbarLanding/>
      <LandingPage/>
      <MainRoute/> */}
    </div>
  );
}
export default App;