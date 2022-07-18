import React, { useContext } from 'react';
import MeetsList from '../components/Meets/MeetsList';
import FavoritesContext from '../store/favorites-context';

const Favorites = () => {
	const favoriteCtx = useContext(FavoritesContext);

	let content;

	if (favoriteCtx.totalFavorites === 0) {
		content = <p>You got no favorite meetup. Try Adding Some !!!</p>;
	} else {
		content = <MeetsList meets={favoriteCtx.favorites} />;
	}

	return (
		<>
			<h1>My Favorites</h1>
			{content}
		</>
	);
};

export default Favorites;
