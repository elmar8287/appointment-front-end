import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../landing/landing.css'
import Partners from '../partners/partners';
import { authenticateUser } from '../../store/users-reducer';

const hero2 = require('./img/hero2.png');



const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userReducer);

  useEffect(() => {
    if (user != null) { navigate('/'); }
  }, [user]);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(authenticateUser(username));
  }


  return (
    <div>
      <section className="section-hero">
      <div className="container-hero">
        <div className="hero__text-box">
          <form className="form form--login" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="email"
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                required
              />
            </div>
            <br />
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <br />
            
            <input type="submit" value="Login" className="btn btn--full margin-top--sm" />
            
            
          </form>
        </div>
        <div className="hero__img-box">
          <img
            src={hero2}
            alt="Ford mustang GT500 blue back view"
          />
        </div>
      </div>
    </section>
    <Partners />
    </div>
  );
};

export default Login;
