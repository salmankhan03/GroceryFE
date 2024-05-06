import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Import BrowserRouter and wrap your Routes in it₹
import HomeScreen from './pages/Home/Home';
import Header from './components/HeaderComponents/HeaderComponents';
import TopNavBar from './components/TopNavBarComponents/TopNavBarComponents';
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import ProductDetails from './pages/ProductsDetails/ProductDetails';
import CartPage from './pages/Cart/Cart';
import CheckoutPage from './pages/Checkout/Checkout';
import ThankYouScreen from './pages/ThankYou/ThankYou';
import LoginScreen from './pages/Login/Login';
import React, { useEffect, useState } from "react";
import SignUp from './pages/SignUP/SignUp';
import PrivateRoute from './PrivateRoute';
import { useSelector } from 'react-redux';
import UserProfile from './pages/UserProfile/UserProfile';
import MainScreen from './pages/Shop/Shop';
import ShopScreen from './pages/Shop/Shop';

function App() {
  const AuthData = useSelector(state => state.AuthReducer.userData);
  const GuestData = useSelector(state => state.AuthReducer.guestUserData)
  console.log(GuestData)
  console.log(AuthData)

  const [isLoggedIn, setLoggedIn] = useState(false)//GuestData ? GuestData?.guestUserId : AuthData?.id
  console.log(isLoggedIn)
  const loginStatusUpdate = () =>{
    console.log("call")
  }
    useEffect(()=>{
      console.log(AuthData)
      console.log(GuestData)
      if(AuthData || GuestData){
        setLoggedIn(true)
      }

    },[GuestData, AuthData])

  return (
    <div className='pagebox'>
      <Router>
        <Routes>
        <Route path="/" 
        element={<WithNavbar component={LoginScreen} />}/>

          <Route path="/Home" element={<WithNavbar component={HomeScreen} />} />
          <Route path="/Shop" element={<WithNavbar component={ShopScreen} />} />

          <Route path="/products-details/:id" element={<WithNavbar component={ProductDetails} />} />
          <Route path="/signup" element={<SignUp />} />

          <Route path="/cart" element={<WithNavbar component={CartPage} />} />
          <Route path="/userProfile" element={<WithNavbar component={UserProfile} />} />

          <Route
            path="/checkout"
            element={<PrivateRoute element={<WithNavbar component={CheckoutPage} />} isAuthenticated={isLoggedIn} fallbackPath="/login" />}
          />
          <Route
            path="/thankyou"
            element={<PrivateRoute element={<ThankYouScreen />} isAuthenticated={isLoggedIn} fallbackPath="/login" />}
          />
          </Routes>
      </Router>
    </div>
  );
}

interface WithNavbarProps {
  component: React.ComponentType<any>;
}

function WithNavbar({ component: Component, ...rest }: WithNavbarProps) {
  return (
    <>
      <TopNavBar></TopNavBar>
      <Header></Header>
      <Component {...rest} />
    </>
  );
}

export default App;

