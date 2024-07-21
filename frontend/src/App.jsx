import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import "./App.css"; // Ensure this path is correct
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";

function App() {
  const { authUser } = useAuthContext();
  const location = useLocation();
  const [backgroundVideo, setBackgroundVideo] = useState("/3ob.mp4"); // Default video for home page

  // Effect to update background video based on route
  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/signup") {
      setBackgroundVideo("/plus.mp4");
    } else {
      setBackgroundVideo("/3ob.mp4");
    }
  }, [location.pathname]);

  // Function to handle video play on user interaction (click)
  const handleVideoPlay = () => {
    const video = document.getElementById("backgroundVideo");
    if (video) {
      video.play().catch((error) => {
        console.error("Error playing video:", error);
      });
    }
  };

  // Handle tab visibility change
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        // Resume video playback if necessary
        handleVideoPlay();
      } else {
        // Pause video or take appropriate action when tab is not visible
        const video = document.getElementById("backgroundVideo");
        if (video) {
          video.pause();
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div className="relative" onClick={handleVideoPlay}>
      {/* Background Video */}
      <video
        id="backgroundVideo"
        key={backgroundVideo} // Ensure video reloads on source change
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="relative z-10 p-4 h-screen flex items-center justify-center">
        <Routes>
          <Route
            path="/"
            element={authUser ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={authUser ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/signup"
            element={authUser ? <Navigate to="/" /> : <SignUp />}
          />
        </Routes>
        <Toaster />
      </div>
    </div>
  );
}

export default App;
