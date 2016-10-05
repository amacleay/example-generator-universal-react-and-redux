// Define the application shell
import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const OtherAppShell = ({ children }) => (
	<div>
	  <h1> Super Cool App part Dos </h1>
	  { children }
	  <Link to="/">Root</Link>
	</div>
	);

OtherAppShell.propTypes = {
  children: PropTypes.element,
};

export default OtherAppShell;

