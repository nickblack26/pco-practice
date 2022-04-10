import React from 'react';
import ContactInfo from './ContactInfo';
import styles from './UserDash.module.css';

const UserDash = ({ name, email }) => {
	return (
		<div className={styles.wrap}>
			<header>
				<h4>{name}</h4>
				<p>{email}</p>
			</header>
			<ContactInfo />
		</div>
	);
};

export default UserDash;
