import React, { useRef } from 'react';
import Card from '../UI/Card';
import classes from './AddNewMeet.module.css';

const AddNewMeet = ({ onAddMeet }) => {
	const titleInputRef = useRef();
	const imageInputRef = useRef();
	const addressInputRef = useRef();
	const descriptionInputRef = useRef();

	const submitHandler = (e) => {
		e.preventDefault();
		const enteredTitle = titleInputRef.current.value;
		const enteredImage = imageInputRef.current.value;
		const enteredAddress = addressInputRef.current.value;
		const enteteredDescription = descriptionInputRef.current.value;

		const meetData = {
			title: enteredTitle,
			image: enteredImage,
			address: enteredAddress,
			description: enteteredDescription,
		};
		onAddMeet(meetData);
	};

	return (
		<>
			<Card>
				<form className={classes.form} onSubmit={submitHandler}>
					<div className={classes.control}>
						<label htmlFor="title">Meet up Title</label>
						<input
							type="text"
							id="title"
							ref={titleInputRef}
							required
						/>
					</div>
					<div className={classes.control}>
						<label htmlFor="image">Image</label>
						<input
							type="url"
							id="image"
							ref={imageInputRef}
							required
						/>
					</div>
					<div className={classes.control}>
						<label htmlFor="address">Address</label>
						<input
							type="text"
							id="address"
							ref={addressInputRef}
							required
						/>
					</div>
					<div className={classes.control}>
						<label htmlFor="description">Description</label>
						<textarea
							id="description"
							cols="5"
							rows="5"
							ref={descriptionInputRef}
							required
						/>
						<div className={classes.actions}>
							<button>Add Meet up</button>
						</div>
					</div>
				</form>
			</Card>
		</>
	);
};

export default AddNewMeet;
