import React from 'react';
import { useRecoilValue } from 'recoil';
import { userIncludedAtom } from '../../atoms/userAtom';
import ContactBlock from './ContactBlock';
import styles from './ContactInfo.module.css';

const ContactInfo = () => {
	const user = useRecoilValue(userIncludedAtom);
	// console.log(user);
	const emails = user.filter((item) => item.type === 'Email');
	const phones = user.filter((item) => item.type === 'PhoneNumber');
	const addresses = user.filter((item) => item.type === 'Address');

	return (
		<div>
			<h2>Contact Information</h2>
			<div className={styles.userInfo}>
				<ContactBlock title='Email' data={emails} />
				<ContactBlock title='Phone' data={phones} />
				<ContactBlock title='Address' data={addresses} />
			</div>
		</div>
	);
};

export default ContactInfo;
