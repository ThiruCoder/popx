import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "./Signup";
import { useEffect, useState } from "react";

export default function Profile({ formData, setFormData }) {
  const matches = useMediaQuery("(max-width: 768px)");
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  useEffect(() => {
    if (!formData || Object.keys(formData).length === 0) {
      navigate('/login');
    }
    const user = localStorage.getItem('user');
    if (user) setUserName(user)
  }, [formData, navigate]);
  const handleLogOut = () => {
    setFormData({
      fullname: '',
      number: '',
      address: '',
      email: '',
      companyName: ''
    })
    navigate('/')
  }
  console.log(formData, userName);

  return (
    <div style={{
      height: '100vh', width: '100%'
    }}>
      <div style={{
        height: '100%', width: '100%', marginBottom: 10
      }}>
        <div style={{
          backgroundColor: 'white', width: '100%', padding: '10px 0',
          display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center'
        }}>
          <h3 style={{ textAlign: 'start', marginLeft: 30 }}>Account Settings</h3>
          <button
            onClick={handleLogOut}
            style={{ width: 100, marginRight: 30, marginBottom: 10 }}>&larr; LogOut</button>
        </div>

        <div style={{ padding: matches ? 10 : 35 }}>
          <div className="profile">
            <div style={{ position: 'relative' }}>
              <img width={80} height={80} src={`https://i.pravatar.cc/100`} alt="userImage" />
              <span style={{ position: 'absolute', bottom: 0, right: 0, }}>📸</span>
            </div>
            <div>
              <h4>{userName ? userName : formData && ((formData.fullname ? formData?.fullname : 'User') ?? 'User')}</h4>
              <p style={{ position: 'relative', bottom: 16, color: 'gray' }}>{formData && ((formData.email ? formData?.email : 'User') ?? 'User')}</p>
            </div>
          </div>

          <p className="desc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum voluptatum neque consequuntur iste ullam, blanditiis aliquam natus perspiciatis ad reiciendis. Magni odit inventore accusantium corporis laborum magnam vel ex nisi, repellendus quisquam, enim vero ab, eius itaque ipsum vitae modi maiores iste corrupti delectus repudiandae autem libero esse qui! Mollitia?
          </p>
        </div>
      </div>
    </div>
  );
}
