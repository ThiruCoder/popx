import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './my.css';
export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);
    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);

    return () => media.removeEventListener('change', listener)
  }, [query, matches])
  return matches;
}

export default function Signup({ formData, setFormData }) {
  const [agency, setAgency] = useState('no');

  const matches = useMediaQuery("(max-width: 768px)");
  const navigate = useNavigate();
  const caps = (item) => {
    return item.charAt(0).toUpperCase() + item.slice(1)
  }
  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      agency
    })
    navigate('/profile');
    localStorage.setItem('user', formData.fullname ?? 'User');
  }

  return (
    <div style={{
      height: '100vh', width: '100%', backgroundColor: 'transparent', display: 'flex', justifyContent: 'center', alignItems: 'center'
    }}>
      <form className="container" onSubmit={handleSubmit}
        style={{
          margin: '0 auto', width: matches ? '90%' : '50%', marginBottom: 10, backgroundColor: 'transparent',
        }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', flexDirection: 'row', marginBottom: 10
        }}>
          <button
            style={{ width: 100, height: 40, fontWeight: 600, }}
            onClick={() => navigate(-1)}>&larr; Back</button>

          <h2 style={{ fontSize: matches ? 19 : 25, position: 'relative', top: 5 }}>Create your PopX account</h2>
        </div>
        {Object.keys(formData).map((item) => (
          <div className="input-group">
            <input
              key={item}
              value={formData[item]}
              onChange={handleChange}
              name={item}
              required
              placeholder=" "
            />
            <label>{caps(item)}</label>
          </div>
        )
        )}
        <div className="radio-group">
          <p>Are you an Agency?</p>

          <div className="radio-options">
            <label>
              <input type="radio" value='no' checked={agency === 'no'}
                onChange={(e) => setAgency(e.target.value)}
                name="agency" />
              <span >Yes</span>
            </label>

            <label>
              <input type="radio" value='yes' checked={agency === 'yes'}
                onChange={(e) => setAgency(e.target.value)}
                name="agency" />
              <span>No</span>
            </label>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'end', flexDirection: 'column' }}>
          <button>Create Account</button>
        </div>
      </form>
    </div>
  );
}
