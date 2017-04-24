import React from 'react';
import Filter from '../data/filter';

export default class Api extends React.Component {
  constructor() {
    super();
    this.state = { cars: [], filteredCars: [] };
  }

  componentDidMount() {
    fetch('http://localhost:3000/cars.json')
      .then(result=>result.json())
      .then(cars=>this.setState({cars}))

      var filteredArray = this.state.cars.filter(cars => cars.year === 2000);
      this.state.filteredCars = filteredArray;
      console.log(this.state.filteredCars)

      console.log(this.state.filter)
  }



  render() {

    /*let filteredCars = this.state.filter(
      (cars) => {
        return cars.year.indexOf(this.state.filter) !== -1;
      }

      // add back filtering later
      <input type="text" value={this.state.filter} onChange={this.updateFilter.bind(this)}></input>


    ); */
    return(
      <div>

        <div className="car-list">

          {this.state.cars.map(cars=>


              (cars.year === 1972 ?

            <div
              className="car"
              key={cars.reg}
              style={{borderColor: cars.color}}>

            <p key={cars.id}>{cars.reg} {cars.name} {cars.year}</p>

            </div>

             : '')

            )}
      </div>

  </div>

    );
  }
}

/*
"reg": "KAK313",
"name": "Volvo",
"color": "#00ffff",
"year": 2002
*/
