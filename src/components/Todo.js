import React, { useState } from 'react';
import Backdrop from './UI/Backdrop';
import Modal from './UI/Modal';

const Todo = ({ text }) => {
	const [showModal, setShowModal] = useState(false);

	const deleteHandler = () => {
		setShowModal(true);
	};

	const closeModalHandler = () => {
		setShowModal(false);
	};

	return (
		<>
			<div className="card">
				<h2>{text}</h2>
				<div className="actions">
					<button className="btn" onClick={deleteHandler}>
						Delete
					</button>
					{showModal && (
						<Modal
							onCancel={closeModalHandler}
							onConfirm={closeModalHandler}
						/>
					)}
					{showModal && (
						<Backdrop onCancel={closeModalHandler} />
					)}
				</div>
			</div>
		</>
	);
};

export default Todo;
