import React, { PropTypes, Component }  from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import Header from '../components/Header';
import CarList from '../components/CarList';
import * as CarListActions from '../actions'
import '../styles/index.css'
import Api from '../data/api';
import Filter from '../data/filter';









class App extends Component {

	render() {
		return(
			<div className="page-container">
				<Header />
				<CarList
					cars={this.props.cars}
					showCars={this.props.showCars}
					buttonAction={() => {
						console.log('button action');
						this.props.actions.toggleCarListVisibility(!this.props.showCars);
					}}
				/>

				<Filter />
				<Api/>
			</div>
		);
	}

}

App.propTypes = {
  cars: PropTypes.array,
  showCars: PropTypes.bool,
  actions: PropTypes.object,
}

const mapStateToProps = state => ({
  cars: state.carList.cars,
  showCars: state.carList.showCars,
})

const mapDispatchToProps = dispatch => ({
   actions: bindActionCreators(CarListActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
