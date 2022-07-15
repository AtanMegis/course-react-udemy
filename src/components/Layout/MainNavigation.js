import React from 'react';
import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
	return (
		<header className={classes.header}>
			<div className={classes.logo}>React Meets</div>
			<nav>
				<ul>
					<li>
						<Link to="/">All Meets</Link>
					</li>
					<li>
						<Link to="/new-meetup">Add New Meets</Link>
					</li>
					<li>
						<Link to="/favorites">My Favorites</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default MainNavigation;