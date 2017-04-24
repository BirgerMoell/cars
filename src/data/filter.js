import React from 'react';
import Api from '../data/api';

export default class Filter extends React.Component {

  constructor(props) {
      super(props);
      this.state = { value: '', cars: [] };

      this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event) {
      console.log(this.state.value);
      this.setState({value: event.target.value});
      document.getElementById("filter").innerHTML = this.state.value;
    }

    componentDidMount() {
      fetch('http://localhost:3000/cars.json')
        .then(result=>result.json())
        .then(cars=>this.setState({cars}))

    }

    
    // parseInt(document.getElementById("filter").innerHTML)

    filter(value) {
      this.state.cars.filter(cars => cars.year === value);
      //this.state.cars.filter(this.state.cars => .this.state.cars.year === 1980);
    }




    render() {
      return (

          <label>
            <h5>Filter year</h5>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            <p id="filter"></p>
          </label>

      );
    }
}
