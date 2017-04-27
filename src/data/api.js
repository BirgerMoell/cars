import React from 'react';

export default class Api extends React.Component {
  constructor() {
    super();
    this.state = { cars: [], filteredCars: [], filter: "" };

    this.handleChange = this.handleChange.bind(this);
    this.setFilter = this.setFilter.bind(this);
  }

  // calls when the input field is changed
  handleChange(event) {
    var filterValue = document.getElementById("filterInput").value
    this.setState({filter: filterValue});
    this.setState({filteredCars: this.state.cars.filter(cars => cars.year === parseInt(filterValue))})
    if (filterValue.length === 0) {
      this.setState({filteredCars: this.state.cars})
    }
  }

  componentWillMount() {
    fetch('http://localhost:3000/cars.json')
      .then(result=>result.json())
      .then(cars=>this.setState({cars}))
      //console.log("the component did mount");
      //console.log(this.state);
      this.setState({filteredCars: this.state.cars})
      //let filterValue = document.getElementById("filterInput").value

      //this.setState({filter: filterValue})
  }

  componentDidMount() {
    this.setState({filteredCars: this.state.cars})
  }

  setFilter() {
    if (document.getElementById("filterInput").value === 0) {
      this.setState({filteredCars: this.state.cars})
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

          {
            //this.state.cars.filter(cars => cars.year === parseInt(filterValue)).map(cars=>
            this.state.filteredCars.map(cars =>
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
