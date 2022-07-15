import React from 'react';
import MeetsItem from './MeetsItem';

import classes from './MeetsList.module.css';

const MeetsList = ({ meets }) => {
	return (
		<ul className={classes.list}>
			{meets.map((meet) => (
				<MeetsItem
					key={meet.id}
					id={meet.id}
					image={meet.image}
					title={meet.title}
					description={meet.description}
					address={meet.address}
				/>
			))}
		</ul>
	);
};

export default MeetsList;
