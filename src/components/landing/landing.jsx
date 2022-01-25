import React from 'react';
import './landing.css'

const hero = require('./img/hero.png');
const image1 = require('./img/logos/image-1.png');
const image2 = require('./img/logos/image-2.png');
const image3 = require('./img/logos/image-3.png');
const image4 = require('./img/logos/image-4.png');
const image5 = require('./img/logos/image-5.png');
const image6 = require('./img/logos/image-6.png');
const image7= require('./img/logos/image-7.png');


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
          <a className="btn btn--full margin-right--sm" href="#">Explore Now</a>
          <a className="btn btn--outline" href="#">Log In</a>
        </div>
        <div className="hero__img-box">
          <img src={hero} alt="Ford mustang GT500 blue back view" />
        </div>
      </div>
    </section>

    <section className="section-partners">
      <div className="container partners">
        <h2 className="partners__heading">Our Partners</h2>
        <div className="logos">
          <img src={image1} alt="Partners logo" />
          <img src={image2} alt="Partners logo" />
          <img src={image3} alt="Partners logo" />
          <img src={image4} alt="Partners logo" />
          <img src={image5} alt="Partners logo" />
          <img src={image6} alt="Partners logo" />
          <img src={image7} alt="Partners logo" />
        </div>
      </div>
    </section>
    </div>
  );
};

export default Landing;