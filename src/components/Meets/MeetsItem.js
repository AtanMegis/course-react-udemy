import React, { useContext } from 'react';
import Card from '../UI/Card';
import classes from './MeetsItem.module.css';
import FavoritesContext from '../../store/favorites-context';

const MeetsItem = ({ image, title, address, description, id }) => {
	const favoriteCtx = useContext(FavoritesContext);

	const itemIsFavorite = favoriteCtx.itemIsFavorite(id);

	const toggleFavoriteHandler = () => {
		if (itemIsFavorite) {
			favoriteCtx.removeFavorite(id);
		} else {
			favoriteCtx.addFavorite({
				id: id,
				title: title,
				description: description,
				image: image,
				address: address,
			});
		}
	};

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
						<button onClick={toggleFavoriteHandler}>
							{itemIsFavorite
								? 'Remove from favorites'
								: 'To Favorites'}
						</button>
					</div>
				</Card>
			</li>
		</>
	);
};

export default MeetsItem;
