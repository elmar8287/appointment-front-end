import React from 'react';
import '../landing/landing.css'
import Partners from '../partners/partners';

const hero2 = require('./img/hero2.png');

const Signup = () => {
  return (
    <div>
      <section className="section-hero">
      <div className="container-hero">
        <div className="hero__text-box">
          <form className="form" action="">
            <div>
              <label for="name">Full Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your full name"
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
            <a className="btn btn--full margin-top--sm" href="#">Create Account</a>
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
