import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ParkingSpace from './Components/ParkingSpace';
import Login from './Components/Login';
import SignUp from './Components/SignUp';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Login/>
      <ParkingSpace/>
      <SignUp/>
      <Footer/>
    </div>
  );
}

export default App;
