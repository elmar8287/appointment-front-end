import React from 'react';
import '../landing/landing.css'


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
            <a className="btn btn--full margin-top--sm" href="#">Log In</a>
          </form>
        </div>
        <div className="hero__img-box">
          <img
            src="img/hero--back.png"
            alt="Ford mustang GT500 blue back view"
          />
        </div>
      </div>
    </section>

    <section className="section-partners">
      <div className="container partners">
        <h2 className="partners__heading">Our Partners</h2>
        <div className="logos">
          <img src="img/logos/image-1.png" alt="Partners logo" />
          <img src="img/logos/image-2.png" alt="Partners logo" />
          <img src="img/logos/image-3.png" alt="Partners logo" />
          <img src="img/logos/image-4.png" alt="Partners logo" />
          <img src="img/logos/image-5.png" alt="Partners logo" />
          <img src="img/logos/image-6.png" alt="Partners logo" />
          <img src="img/logos/image-7.png" alt="Partners logo" />
        </div>
      </div>
    </section>
    </div>
  );
};

export default Login;
