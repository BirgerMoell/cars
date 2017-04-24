import React, { Component, PropTypes } from 'react';

class CarList extends Component {

	renderButton() {
		const title = (this.props.showCars ? 'Hide cars' : 'Show cars');

		return(
			<button
				onClick={() => {
					this.props.buttonAction();
				}}
			>
				{title}
			</button>
		);
	}

	renderCarList() {
		if (this.props.showCars) {
			return(
				<div className="car-list">
					{
						this.props.cars.map((car) =>
							<div
								className="car"
								key={car.reg}
								style={{borderColor: car.color}}
							>
								<p>{car.reg} - {car.name}</p>
							</div>
						)
					}
				</div>
			);
		}
	}

	render() {
		return (
			<div>
				{<h2>List of carsss</h2>}
				{this.renderButton()}
				{this.renderCarList()}
			</div>
		);
	}

}

CarList.PropTypes = {
  cars: PropTypes.array,
  showCars: PropTypes.bool,
  buttonAction: PropTypes.func,
}

export default CarList;
