import React, { Component } from 'react';
import '../landing/landing.css'

const image1 = require('./img/onecar.webp');

export default class Item extends Component {
  constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
	}

	// ComponentDidMount is used to
	// execute the code
	componentDidMount() {
		fetch(
  "https://whispering-temple-38914.herokuapp.com/v1/industries/1/")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true
				});
			})
	}

  render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return <div>
			<h1> Pleses wait some time.... </h1> </div> ;

  return (
    <div class="app-grid">
      <aside class="sidebar">
        <div class="app-logo">Lando</div>

        <ul class="sidebar__nav">
          <li class="sidebar__nav-link sidebar__nav-link--active">
            <ion-icon name="car-sport-outline"></ion-icon><span>Ford</span>
          </li>
          <li class="sidebar__nav-link">
            <ion-icon name="car-sport-outline"></ion-icon><span>BMW</span>
          </li>
          <li class="sidebar__nav-link">
            <ion-icon name="calendar-outline"></ion-icon
            ><span>Appointments</span>
          </li>
        </ul>
        <ul class="sidebar__profile">
          <li>
            <ion-icon name="person-circle-outline"></ion-icon
            ><span>Profile</span>
          </li>
          <li>
            <ion-icon name="help-circle-outline"></ion-icon><span>Help</span>
          </li>
          <li><ion-icon name="book-outline"></ion-icon><span>About</span></li>
          <li>
            <ion-icon name="log-out-outline"></ion-icon><span>Logout</span>
          </li>
        </ul>
      </aside>
      <main>
        <section class="section-cars">
          <div class="mini-container">
            <h3 class="subheading">Order placed: 24-01-2022</h3>
            <h2 class="heading-secondary">FORD MUSTANG</h2>
            <img class="one-car" src={image1} alt="Form mustang" />
            <ul class="details">
              <li>
                <h4 class="details__title">Model</h4>
                <p class="details__description">Shelby GTR</p>
              </li>
              <li>
                <h4 class="details__title">Engine</h4>
                <p class="details__description">5.2L V8 GAS</p>
              </li>
              <li>
                <h4 class="details__title">Seats</h4>
                <p class="details__description">4 people</p>
              </li>
              <li>
                <h4 class="details__title">Price for 3 months</h4>
                <p class="details__description">1480$</p>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};
};
