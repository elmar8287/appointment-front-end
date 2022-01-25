import React from 'react';
import Partners from '../partners/partners';
import { Link } from 'react-router-dom';
import './landing.css'

const hero = require('./img/hero.png');


const Landing = () => {
  return (
    <div>
        <section className="section-hero">
      <div className="container-hero">
        <div className="hero__text-box">
          <h1 className="heading-primary">
            Premium <br />
            Car Rental <br />
            in New York
          </h1>
          <p className="hero__description">
            Don't deny yourself the pleasure of driving the best premium cars
            from around the world here and now. We have the best cars for you.
          </p>
          <Link to="/signup">
          <a className="btn btn--full margin-right--sm" href="#">Explore Now</a>
          </Link>
          
          <Link to="/login">
            <a className="btn btn--outline" href="#">Log In</a>
          </Link>
        </div>
        <div className="hero__img-box">
          <img src={hero} alt="Ford mustang GT500 blue back view" />
        </div>
      </div>
    </section>
    <Partners />
    </div>
  );
};

export default Landing;