import React from 'react';
import { useRecoilValue } from 'recoil';
import { userDataAtom, userIncludedAtom } from '../../atoms/userAtom';
import styles from './DashNav.module.css';
import DashNavHeader from './DashNavHeader';

const DashNav = ({ session }) => {
	const user = useRecoilValue(userDataAtom);
	const additionalInfo = useRecoilValue(userIncludedAtom);
	return (
		<aside className={styles.wrap}>
			<DashNavHeader image={session.user.image} />
			<hr />
			<ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
				<li>Profile</li>
				<li>Activity</li>
				<li>Communication</li>
				<li>Workflows</li>
				<li>Notes</li>
				<li>Forms</li>
			</ul>
		</aside>
	);
};

export default DashNav;
