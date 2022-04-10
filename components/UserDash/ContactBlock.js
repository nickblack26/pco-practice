import React from 'react';
import styles from './ContactBlock.module.css';

const ContactBlock = ({ icon, title, data }) => {
	// console.log(data);
	return (
		<div className={styles.wrap}>
			<header>
				{icon}
				<h3 className={styles.title}>{title}</h3>
			</header>
			<ul className={styles.list}>
				{data.map((item) => {
					return (
						<li className={styles.listItem} key={item?.id}>
							<p className={styles.label}>
								{item?.attributes?.location}
							</p>

							{item.attributes.street ? (
								<div>
									<span>{item.attributes.street}</span>
									<span>
										{item.attributes.city},
										{item.attributes.state}{' '}
										{item.attributes.zip}
									</span>
								</div>
							) : (
								<div className={styles.labelItemWrap}>
									<div>
										{item.attributes.address ? (
											<>{item.attributes.address}</>
										) : null}
										{item.attributes.national ? (
											<>{item.attributes.national}</>
										) : null}
									</div>
									{item?.attributes?.primary ? (
										<p className={styles.primary}>
											Primary
										</p>
									) : null}
								</div>
							)}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default ContactBlock;
