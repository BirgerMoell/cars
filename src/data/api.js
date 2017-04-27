import React from 'react';
import FlipMove from 'react-flip-move';

export default class Api extends React.Component {
  constructor() {
    super();
    this.state = { cars: [], filteredCars: [], filter: "" };

    this.handleChange = this.handleChange.bind(this);
    this.checkFilter = this.checkFilter.bind(this);
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
    if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
    fetch('http://localhost:3000/cars.json')
      .then(result=>result.json())
      .then(cars=>this.setState({cars}))
      .then(this.setState({filteredCars: this.state.cars}))
    }
    else {
      fetch(window.location.href + 'cars.json')
        .then(result=>result.json())
        .then(cars=>this.setState({cars}))
        .then(this.setState({filteredCars: this.state.cars}))
    }
  }

  checkFilter() {
    // gives out the cars array in the beginning
    if (this.state.filteredCars.length === 0) {
      return (
        <div>
            <FlipMove maintainContainerHeight={true}>
          {this.state.cars.map(cars =>

            <div className="car"key={cars.reg}>
              <div classname="leftSection">{cars.reg} </div>
              <div className="middleSection"> {cars.name}, {cars.year} </div>
              <div className="rightSection symbol" style={{background: cars.color}}></div>
            </div>
          )
          }
          </FlipMove>

        </div>
      )

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


          {this.checkFilter()}

          <div>
              <FlipMove maintainContainerHeight={true}>
            {this.state.filteredCars.map(cars =>

              <div className="car"key={cars.reg}>
                <div classname="leftSection">{cars.reg} </div>
                <div className="middleSection"> {cars.name}, {cars.year} </div>
                <div className="rightSection symbol" style={{background: cars.color}}></div>
              </div>
            )
            }
            </FlipMove>

          </div>



            </div>

          </div>

    );
  }
}
