import React from 'react';
import AddNewMeet from '../components/Meets/AddNewMeet';
import { useHistory } from 'react-router-dom';
const NewMeets = () => {
	const history = useHistory();

	const addNewMeetHandler = (meetData) => {
		fetch(
			'https://react-meetup-4fbef-default-rtdb.firebaseio.com/meetUp.json',
			{
				method: 'POST',
				body: JSON.stringify(meetData),
				headers: {
					'Content-Type': 'application/json',
				},
			}
		).then(() => {
			history.replace('/');
		});
	};

	return (
		<>
			<AddNewMeet onAddMeet={addNewMeetHandler} />
		</>
	);
};

export default NewMeets;
