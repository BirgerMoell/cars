import React from 'react';

export default class Api extends React.Component {
  constructor() {
    super();
    this.state = { cars: [], filteredCars: [], filter: "" };

    this.handleChange = this.handleChange.bind(this);
    this.setFilter = this.setFilter.bind(this);
  }

  handleChange(event) {
    var filterValue = document.getElementById("filterInput").value
    this.setState({filter: filterValue});
    this.setState({filteredCars: this.state.cars.filter(cars => cars.year === parseInt(filterValue))})
    if (filterValue.length === 0) {
      this.setState({filteredCars: this.state.cars})
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/cars.json')
      .then(result=>result.json())
      .then(cars=>this.setState({cars}))
    this.setState({filteredCars: this.state.cars})
  }

  setFilter() {
    if (this.state.filter.length === 0) {
      return "filteredCars"
    }
    else {
      return "cars"
    }
  }


  render() {


    return(
      <div>

        <div className="car-list">

          <label>
            <h5>Filter year</h5>
            <input type="text" id="filterInput" value={this.state.value} onChange={this.handleChange} />
            <p id="filter"></p>
          </label>


          {this.state.filteredCars.map(cars=>

            <div
              className="car"
              key={cars.reg}
              style={{borderColor: cars.color}}>

            <p key={cars.id}>{cars.reg} {cars.name} {cars.year}</p>

            </div>



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
