import { getSession } from 'next-auth/react';
import React, { useEffect } from 'react';
import DashNav from '../../components/DashNav';
import UserDash from '../../components/UserDash';
import styles from './Dashboard.module.css';
import { useRecoilState } from 'recoil';
import { userDataAtom, userIncludedAtom } from '../../atoms/userAtom';

export async function getServerSideProps(context) {
	const session = await getSession(context);

	return {
		props: {
			session,
		},
	};
}

const Dashboard = ({ session }) => {
	const [user, setUser] = useRecoilState(userDataAtom);
	const [aUserData, setAUserData] = useRecoilState(userIncludedAtom);

	return (
		<>
			<main className={styles.dashboardWrap}>
				<div className='container'>
					<div className={styles.dashboardContent}>
						<DashNav session={session} />
						<UserDash />
					</div>
				</div>
			</main>
		</>
	);
};

export default Dashboard;
