import React, { Component, PropTypes } from 'react';

class Header extends Component {

	render() {
		return (
			<div>
			<img src="/car-list-logo.png" className="headerImage"/>
			<div className="header">

			</div>

			</div>
		);
	}

}

Header.PropTypes = {
  clickAction: PropTypes.array,
}

export default Header;
