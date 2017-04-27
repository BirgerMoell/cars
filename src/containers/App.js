import React, { Component }  from 'react';
import Header from '../components/Header';
import '../styles/index.css'
import Api from '../data/api';

export default class App extends Component {

	render() {
		return(
			<div className="page-container">
				<Header />
				<Api/>
			</div>
		);
	}

}
