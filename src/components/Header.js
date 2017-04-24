import React, { Component, PropTypes } from 'react';

class Header extends Component {

	render() {
		return (
			<div className="header">
				<h1>The car list application</h1>
			</div>
		);
	}

}

Header.PropTypes = {
  clickAction: PropTypes.array,
}

export default Header;