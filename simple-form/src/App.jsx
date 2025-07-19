import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  UserForm  from './UserForm.jsx'
import  HomePage  from './HomePage.jsx'
import "./App.css";

function App() {

  return (
    <>
      {/* <Form /> */}
      <Router>
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="/user-form" element={<UserForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
