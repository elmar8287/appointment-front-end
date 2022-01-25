import React from 'react';
import '../landing/landing.css'

const image1 = require('./img/logos/image-1.png');
const image2 = require('./img/logos/image-2.png');
const image3 = require('./img/logos/image-3.png');
const image4 = require('./img/logos/image-4.png');
const image5 = require('./img/logos/image-5.png');
const image6 = require('./img/logos/image-6.png');
const image7 = require('./img/logos/image-7.png');

const Partners = () => {
  return (
    <div>
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
    </div>
  );
};

export default Partners;
