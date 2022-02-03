import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../store/users-reducer';
import '../landing/landing.css'
import Partners from '../partners/partners';

const hero2 = require('./img/hero2.png');

const Signup = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userReducer);

  useEffect(() => {
    if (user != null) { navigate('/'); }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(username));
  };
  return (
    <div>
      <section className="section-hero">
      <div className="container-hero">
        <div className="hero__text-box">
          <form className="form" onSubmit={handleSubmit}>
            <div>
              <label for="name">Username</label>
              <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                name="name"
                id="name"
                placeholder="Enter your username"
                required
              />
            </div>

            <div>
              <label for="email">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label for="password">Pasword</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <div>
              <label for="password">Confirm Pasword</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Confirm your password"
                required
              />
            </div>
            <input type="submit" value="SIGNUP" className="btn btn--full margin-top--sm"  />
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

export default Signup;
