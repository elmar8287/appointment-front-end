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
    <dev>
        <section class="section-hero">
      <div class="container-hero">
        <div class="hero__text-box">
          <h1 class="heading-primary">
            Premium <br />
            Car Rental <br />
            in New York
          </h1>
          <p class="hero__description">
            Don't deny yourself the pleasure of driving the best premium cars
            from around the world here and now. We have the best cars for you.
          </p>
          <a class="btn btn--full margin-right--sm" href="#">Explore Now</a>
          <a class="btn btn--outline" href="#">Log In</a>
        </div>
        <div class="hero__img-box">
          <img src={hero} alt="Ford mustang GT500 blue back view" />
        </div>
      </div>
    </section>

    <section class="section-partners">
      <div class="container partners">
        <h2 class="partners__heading">Our Partners</h2>
        <div class="logos">
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
    </dev>
  );
};

export default Landing;