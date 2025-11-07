import 'bootstrap/dist/css/bootstrap.min.css';
import '../pages_style/homepage.css';
import { useState } from 'react';
import { signupUser, loginUser } from "../utils/api";
import { useNavigate } from "react-router-dom";


function HomePage() {
  const [activeTab, setActiveTab] = useState('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  // Handlers
  const handleSignup = async (e) => {
    e.preventDefault();
    const data = await signupUser(name, email, password);
    if (data.token) {
      localStorage.setItem("token", data.token);
      alert("Signup successful!");
    } else {
      alert(data.message);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = await loginUser(email, password);
    if (data.token) {
      localStorage.setItem("token", data.token);
      alert("Login successful!");
      navigate("/Dashboard");
    } else {
      alert(data.message);
    }
  };
  
  return (
    <div className="homePageWrapper">
    <div className="container mt-5 custom-border">
      <h1 className="text-center text-primary mb-4">Creative Automation AI</h1>
      <ul className="nav nav-tabs justify-content-center">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'login' ? 'active' : ''}`}
            onClick={() => setActiveTab('login')}
          >
            Sign In
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'signup' ? 'active' : ''}`}
            onClick={() => setActiveTab('signup')}
          >
            Sign Up
          </button>
        </li>
      </ul>

      <div className="card mt-4 p-4 shadow-sm mx-auto" style={{ maxWidth: '400px' }}>
        {activeTab === 'login' ? (
          <form onSubmit={handleLogin}>
            <h3 className="text-center mb-3">Sign In</h3>
            <div className="mb-3">
              <label className="text-start d-block">Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="text-start d-block">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Sign In
            </button>
          </form>
        ) : (
          <form onSubmit={handleSignup}>
            <h3 className="text-center mb-3">Sign Up</h3>
            <div className="mb-3">
              <label className="text-start d-block">Full Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="text-start d-block">Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="text-start d-block">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-success w-100">
              Sign Up
            </button>
          </form>
        )}
      </div>
    </div>
    </div> // 4. CLOSE THE WRAPPER DIV
  );
}

export default HomePage;
