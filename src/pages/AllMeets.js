import React, { useEffect, useState } from 'react';
import MeetsList from '../components/Meets/MeetsList';

const AllMeets = () => {
	const [loadedMeets, setLoadedMeets] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);
		fetch(
			'https://react-meetup-4fbef-default-rtdb.firebaseio.com/meetUp.json'
		)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				const meets = [];
				for (const key in data) {
					const meet = {
						id: key,
						...data[key],
					};
					meets.push(meet);
				}
				setIsLoading(false);
				setLoadedMeets(meets);
			});
	}, []);

	if (isLoading) {
		return (
			<section>
				<p>Loading ...</p>
			</section>
		);
	}

	return (
		<>
			<h1>All Meets</h1>
			<section>
				<MeetsList meets={loadedMeets} />
			</section>
		</>
	);
};

export default AllMeets;
