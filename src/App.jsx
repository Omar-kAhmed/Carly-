import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header/header";
import Hero from "./components/Hero/hero";
import Footer from "./components/Footer/footer";
import svg from "./assets/331.svg";
import Main from "./components/Main";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Footer1 from "./components/Footer copy/footer1"
import axios from "axios";
import Header1 from "./components/Header copy/header";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import BookingForm from "./components/BookingForm/BookingForm";


function App() {
  const [isLoading, setIsLoading] = useState(true); // For initial loading
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track user authentication state
  const [showSignUp, setShowSignUp] = useState(false);  // Track visibility of SignUp form
  const [isLoginLoading, setIsLoginLoading] = useState(false); // Track loading state during login process
  const token = localStorage.getItem("token");



  const [users, setUsers]= useState([])
  useEffect(() =>{
    axios.get(`${import.meta.env.VITE_API_URL}/getUsers`)
    .then(users=> setUsers(users.data))
    .catch(err => console.log(err))

  },[])

  // Check authentication status on component mount
  useEffect(() => {
    if (token) {
      setIsAuthenticated(true);  // User is authenticated if the token exists
    }

    // Set isLoading to false after 2 seconds to simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer); // Cleanup timeout on component unmount
  }, [token]);

  // Function to handle login success
  const handleLoginSuccess = (token) => {
    localStorage.setItem("token", token);  // Store JWT in localStorage
    setIsAuthenticated(true);  // Set authenticated state to true
    setIsLoginLoading(false);  // Stop the loading state after login success
  };

  // Show SignUp form
  const handleShowSignUp = () => {
    setShowSignUp(true);  // Show SignUp form
  };

  // Handle navigation after SignUp
  const handleSignUpSuccess = () => {
    setShowSignUp(false);  // Hide SignUp form
    setIsAuthenticated(true); // Assuming user is authenticated after sign up
  };

  return (
    <div>


      {(isLoading || isLoginLoading) && (
        <div className="load">
          <img id="svg" src={svg} alt="Logo" width="50" height="50" />
          <h2 className="loading-text">Engine Loading...</h2>
        </div>
      )}

      {!isLoading && !isLoginLoading && (
        <div className="app">
          {/* Conditionally render the SignUp form when it's triggered */}
          {showSignUp ? (
            <SignUp onSignUpSuccess={handleSignUpSuccess} />
          ) : (
            <>
              {/* Header, Hero, and Footer are rendered only when not in SignUp mode */}

              {!isAuthenticated && (
                <>
                  <Header handleShowSignUp={handleShowSignUp} />
                  <Hero />
]                </>
              )}
            </>
          )}
        </div>
      )}

      <Routes>
        {/* Main route for authenticated users */}
        <Route
          path="/"
          element={isAuthenticated && !isLoading ? <> <Header1/> <Main /> <BookingForm></BookingForm>  </> : <Navigate to="/" />}
        />
        {/* Login and SignUp Routes */}
        <Route
          path="/signup"
          element={<SignUp onSignUpSuccess={handleSignUpSuccess} />}
        />
        <Route
          path="/login"
          element={<Login onLoginSuccess={handleLoginSuccess} setIsLoginLoading={setIsLoginLoading} />}
        />
        <Route
          path="/profile"
          element={ ProfilePage}></Route>
      </Routes>
    </div>
  );
}

export default App;
