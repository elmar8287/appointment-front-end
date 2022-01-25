import React from 'react';
import { Link } from 'react-router-dom';
import '../landing/landing.css'
import Partners from '../partners/partners';

const hero2 = require('./img/hero2.png');

const Login = () => {
  return (
    <div>
      <section className="section-hero">
      <div className="container-hero">
        <div className="hero__text-box">
          <form className="form form--login" action="">
            <div>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <br />
            <div>
              <label htmlFor="password">Pasword</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <br />
            <Link to="/main">
              <a className="btn btn--full margin-top--sm" href="#">Log In</a>
            </Link>
            
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
