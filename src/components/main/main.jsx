import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../landing/landing.css'

const image1 = require('./img/ford/car1.webp');
const image2 = require('./img/ford/car2.webp');
const image3 = require('./img/ford/car3.webp');
const image4 = require('./img/ford/car4.webp');
const image5 = require('./img/ford/car5.webp');
const image6 = require('./img/ford/car6.webp');


export default class Main extends Component {
  constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
	}
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
    <div>
    <div className="app-grid">
    <aside className="sidebar">
      <div className="app-logo">Lando</div>
      <ul className="sidebar__nav">
        <li className="sidebar__nav-link sidebar__nav-link--active">
          <ion-icon name="car-sport-outline"></ion-icon><span>Ford</span>
        </li>
        <li className="sidebar__nav-link">
          <ion-icon name="car-sport-outline"></ion-icon><span>BMW</span>
        </li>
        <li className="sidebar__nav-link">
          <ion-icon name="calendar-outline"></ion-icon
          ><span>Appointments</span>
        </li>
      </ul>
      <ul className="sidebar__profile">
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
      <section className="section-cars">
        <div className="mini-container">
          <h3 className="subheading">POWER OF WILD HORSES</h3>
          <h2 className="heading-secondary">FORD COMPANY</h2>
          
          <div className="cars-list">
              {
                items.map((item) => (
                  <div className="car-card">
              <Link to="/item">
                <img src={item.image} alt="Ford company car" />
              </Link>
                <p className="car-card__title"> { item.name } </p>
              </div>
                ))
              }

          </div>
        </div>
      </section>
    </main>
   </div>
   </div>
  )
}
}