import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import './index.css';

function App() {
  const [formData, setFormData] = useState({
    fullname: '',
    number: '',
    address: '',
    email: '',
    companyName: ''
  });

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing formData={formData} setFormData={setFormData} />} />
        <Route path="/login" element={<Login formData={formData} setFormData={setFormData} />} />
        <Route path="/signup" element={<Signup formData={formData} setFormData={setFormData} />} />
        <Route path="/profile" element={<Profile formData={formData} setFormData={setFormData} />} />
      </Routes>
    </>
  );
}

export default App;
