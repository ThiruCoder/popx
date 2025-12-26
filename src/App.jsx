import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { usePage } from "./context/usePage";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import FooterNav from "./components/FooterNav";

function App() {
  const [formData, setFormData] = useState({
    fullname: '',
    number: '',
    address: '',
    email: '',
    companyName: ''
  });

  const { pages, pageIndex } = usePage();
  const navigate = useNavigate();

  useEffect(() => {
    navigate(pages[pageIndex]);
  }, [pageIndex]);

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
