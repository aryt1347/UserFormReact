import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  UserForm  from './UserForm.jsx'
import  HomePage  from './HomePage.jsx'
import Login from './LoginPage.jsx'
import ProfilePage from "./ProfilePage.jsx";
import "./App.css";

function App() {

  return (
    <>
      {/* <Form /> */}
      <Router>
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="/user-form" element={<UserForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
