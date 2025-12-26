import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "./Signup";
import './my.css';

export default function Login({ formData, setFormData }) {
  const [agency, setAgency] = useState('no');

  const matches = useMediaQuery("(max-width: 768px)");
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/profile');
  }
  const caps = (item) => {
    return item.charAt(0).toUpperCase() + item.slice(1)
  }
  return (
    <div style={{
      height: '100vh', backgroundColor: 'transparent', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'
    }}>
      <form className="container" onSubmit={handleSubmit}
        style={{
          margin: '0 auto', width: matches ? '90%' : '50%', marginBottom: 10, backgroundColor: 'transparent',
        }}>
        <h2>Signin to your PopX account</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="input-group">
          <input value={formData?.email}
            onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
            name="email" required type="email" placeholder=" " />
          <label>Email</label>
        </div>
        <div className="input-group">
          <input type="password" placeholder=" " />
          <label>Password</label>
        </div>
        <button type="submit" >Login</button>
      </form>
    </div>
  );
}
