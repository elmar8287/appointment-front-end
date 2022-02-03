import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../landing/landing.css'
import Navigation from '../navigation/navigation';


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
      <Navigation />
    <div className="app-grid">
    <main>
      <section className="section-cars">
        <div className="mini-container">
          <h3 className="subheading">POWER OF WILD HORSES</h3>
          <h2 className="heading-secondary">FORD COMPANY</h2>
          
          <div className="cars-list">
              {
                items.map((item) => (
                  <ul className="car-card">
              <Link to="/item">
                <img src={item.image} alt="Ford company car" />
              </Link>
                <p className="car-card__title"> { item.name } </p>
              </ul>
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