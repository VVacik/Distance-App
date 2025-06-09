import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import NavBar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import "./CSS/App.css";

import { AuthProvider } from "./Api/AuthContext.jsx";

function App() {
  console.log("Zrobić by dało się zaznaczać te zdjęcia po ludzku");

  console.log("zrobić by dodawnanie zdjęć działało");
  return (
    <>
      <AuthProvider>
        <NavBar />

        <main className="main-contens">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/MyPage" element={<MyPage />}></Route>
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
        <Footer></Footer>
      </AuthProvider>
    </>
  );
}

export default App;
