import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "./Signup";

export default function Landing() {
  const navigate = useNavigate();
  const matches = useMediaQuery("(max-width: 768px)");
  return (
    <div style={{
      height: '100vh', width: '100%', display: 'flex',
      justifyContent: 'end', alignItems: 'center', flexDirection: 'column',
    }}>
      <div style={{
        margin: '0 auto', width: matches ? '90%' : '50%', marginBottom: 50
      }}>
        <h2>Welcome to PopX</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <button className="primary" onClick={() => navigate('/signup')} >Create Account</button>
        <button className="secondary"
          onClick={() => navigate('/login')}>Already Registered? Login</button>
      </div>
    </div>
  );
}
