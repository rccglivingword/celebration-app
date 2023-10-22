import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Instance from '../Instance';
import './loginpage.css'; // Import your CSS file



function LoginPage() {
    const navigate = useNavigate();
  // State to manage the form inputs
    const [auth_data, setAuth_data] = useState({
    username: '',
    password: '',
  });
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false)
  );
  const [hidemessage, setHidemessage] = useState(true)

  // Function to handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAuth_data({ ...auth_data, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    Instance.post("/users/login", {...auth_data})
        .then( (res) => {
            console.log(res.status)
            if (res.status === 201){
                localStorage.setItem("authenticated", true);
                navigate("/App");
                alert("You have Login Successfully")
                console.log(res.status)
                return
            }else if (res.status === 200){
                setHidemessage(!hidemessage)
                console.log(hidemessage)
                return
            }
        })
        .catch (error => {
            console.log(error)
            setHidemessage(!hidemessage)
        })
    // console.log('Login Form Submitted:', auth_data);
    setAuth_data({
        username: '',
        password: '',
      })
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={auth_data.username}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={auth_data.password}
              onChange={handleInputChange}
            />
          </div>
          {console.log(hidemessage)}
          { hidemessage === true ? <div></div>:<div className='hidetext'>
            <span>Incorrect username or password please try again</span>
        </div>}
          <button type="submit">Login</button>
        </form>
        
      </div>
    </div>
  );
}

export default LoginPage;
