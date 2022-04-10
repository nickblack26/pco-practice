import React, { useState } from 'react';
import Image from 'next/image';
import styles from './DashNavHeader.module.css';
import Shield from '../SVG/Shield';
import ShieldOff from '../SVG/ShieldOff';

const DashNavHeader = ({ image, backgroundCheck }) => {
	const [bcClear, setBcClear] = useState(true);

	return (
		<header className={styles.wrap}>
			<div className={styles.header}>
				<Image
					src={image}
					className={styles.image}
					height={40}
					width={40}
				/>
				<div className={styles.buttonWrap}>
					<button className={styles.button}>Grapevine</button>
					<button
						className={`${styles.button} ${styles.bc}`}
						onClick={() => setBcClear(!bcClear)}
					>
						{backgroundCheck ? (
							<Shield color='green' />
						) : (
							<ShieldOff />
						)}
					</button>
				</div>
			</div>
			<div>
				<h5>Member Since 2017</h5>
				<p>
					Descripiton about the user so people can connect with them.
				</p>
			</div>
		</header>
	);
};

export default DashNavHeader;
