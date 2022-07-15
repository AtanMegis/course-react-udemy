import React from 'react';
import Card from '../UI/Card';
import classes from './MeetsItem.module.css';

const MeetsItem = ({ image, title, address, description }) => {
	return (
		<>
			<li className={classes.item}>
				<Card>
					<div className={classes.image}>
						<img src={image} alt={title} />
					</div>

					<div className={classes.content}>
						<h3>{title}</h3>
						<address>{address}</address>
						<p>{description}</p>
					</div>

					<div className={classes.actions}>
						<button>Add to Favorites</button>
					</div>
				</Card>
			</li>
		</>
	);
};

export default MeetsItem;
