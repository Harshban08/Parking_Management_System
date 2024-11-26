import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Profile from './Components/Profile';
import Footer from './Components/Footer';
import ParkingSpace from './Components/ParkingSpace';
import Wallet from './Components/Wallet'; 
import Contact from './Components/Contact';  
import Bookings from './Components/Bookings';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path="/" element={<ParkingSpace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/parking-space" element={<ParkingSpace />} />
        <Route path="/wallet" element={<Wallet />} />  {/* Add Wallet route */}
        <Route path='/contact' element={<Contact />} />
        <Route path='/bookings' element={<Bookings />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;