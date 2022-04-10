import styles from '../styles/Home.module.css';
import { getSession } from 'next-auth/react';
import { getEvents, getUserInfo } from '../lib/pco';
import { useEffect } from 'react';

export async function getServerSideProps(context) {
	const session = await getSession(context);
	const { accessToken, id } = session.user;
	const data = await getUserInfo(accessToken, id);
	const events = await getEvents(accessToken);

	return {
		props: {
			session,
			data,
		},
	};
}

export default function Home({ session, data }) {
	return (
		<main className='main'>
			<section className='section hero'>
				<div className='container'>
					<div className={styles.titleWrapLanding}>
						<h1 className={styles.title}>
							Grow your audience with direct and relevant content.
						</h1>
						<p className={styles.subtitle}>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Suspendisse varius enim in eros elementum
							tristique. Duis cursus, mi quis viverra ornare, eros
							dolor interdum nulla.
						</p>
					</div>
				</div>
				<img
					className={styles.heroCorner}
					src='./images/HeroCorner.jpg'
				/>
			</section>
			<section className='section'>
				<div className='container'>
					<div className={styles.titleWrap}>
						<div className={styles.titleContent}>
							Upcoming Events
						</div>
						<h2>
							Grow your audience with direct and relevant content.
						</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Suspendisse varius enim in eros elementum
							tristique. Duis cursus, mi quis viverra ornare, eros
							dolor interdum nulla.
						</p>
					</div>
					<div className='grid-thirds'>
						<a href='#' className={styles.card}>
							<img className={styles.cardImage} />
							<h5>Event Title</h5>
							<p>
								Bunc id tincidunt duis faucibus urna adipiscing.
								Id lorem diam egestas vel facilisis fames.
							</p>
						</a>
						<a href='#' className={styles.card}>
							<img className={styles.cardImage} />
							<h5>Event Title</h5>
							<p>
								Bunc id tincidunt duis faucibus urna adipiscing.
								Id lorem diam egestas vel facilisis fames.
							</p>
						</a>
						<a href='#' className={styles.card}>
							<img className={styles.cardImage} />
							<h5>Event Title</h5>
							<p>
								Bunc id tincidunt duis faucibus urna adipiscing.
								Id lorem diam egestas vel facilisis fames.
							</p>
						</a>
					</div>
				</div>
			</section>
			<section className='section large'>
				<div className='container'>
					<div className={styles.sectionGrid}>
						<div style={{ position: 'relative' }}>
							<img src='./images/SectionImage.jpg' />
						</div>
						<div>
							<div className={styles.titleContent}>
								CONTENT SECTION
							</div>
							<h2>Websites that connect with your audience.</h2>
							<p>
								Bunc id tincidunt duis faucibus urna adipiscing.
								Id lorem diam egestas vel facilisis fames. Bunc
								id tincidunt duis faucibus urna adipiscing.
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Suspendisse varius enim in eros
								elementum tristique. Duis cursus, mi quis
								viverra ornare, eros dolor interdum nulla.
							</p>
						</div>
					</div>
				</div>
				<div className={styles.block}></div>
			</section>
			<section className='section large'>
				<div className='container'>
					<div
						className={`${styles.sectionGrid} ${styles.oppositeGrid}`}
					>
						<div>
							<div className={styles.titleContent}>
								CONTENT SECTION
							</div>
							<h2>Websites that connect with your audience.</h2>
							<p>
								Bunc id tincidunt duis faucibus urna adipiscing.
								Id lorem diam egestas vel facilisis fames. Bunc
								id tincidunt duis faucibus urna adipiscing.
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Suspendisse varius enim in eros
								elementum tristique. Duis cursus, mi quis
								viverra ornare, eros dolor interdum nulla.
							</p>
						</div>
						<div style={{ position: 'relative' }}>
							<img src='./images/SectionImage.jpg' />
						</div>
					</div>
				</div>
				<div
					className={`${styles.block} ${styles.oppositeBlock}`}
				></div>
			</section>
			<section className='section large'>
				<div className='container'>
					<div className={styles.sectionGrid}>
						<div style={{ position: 'relative' }}>
							<img src='./images/SectionImage.jpg' />
						</div>
						<div>
							<div className={styles.titleContent}>
								CONTENT SECTION
							</div>
							<h2>Websites that connect with your audience.</h2>
							<p>
								Bunc id tincidunt duis faucibus urna adipiscing.
								Id lorem diam egestas vel facilisis fames. Bunc
								id tincidunt duis faucibus urna adipiscing.
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Suspendisse varius enim in eros
								elementum tristique. Duis cursus, mi quis
								viverra ornare, eros dolor interdum nulla.
							</p>
						</div>
					</div>
				</div>
				<div className={styles.block}></div>
			</section>
			<section className='section'>
				<div className='container'>
					<div className={`${styles.titleWrap} ${styles.left}`}>
						<h2>Section Title</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Suspendisse varius enim in eros elementum
							tristique. Duis cursus, mi quis viverra ornare, eros
							dolor interdum nulla.
						</p>
					</div>
					<div className='grid-thirds'>
						<div className={styles.programBase}>
							<h4 className={styles.superTitle}>Program</h4>
							<p className={styles.bodyTitle}>
								Program Description
							</p>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut
							</p>
						</div>
						<div className={styles.programBase}>
							<h4 className={styles.superTitle}>Program</h4>
							<p className={styles.bodyTitle}>
								Program Description
							</p>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut
							</p>
						</div>
						<div className={styles.programBase}>
							<h4 className={styles.superTitle}>Program</h4>
							<p className={styles.bodyTitle}>
								Program Description
							</p>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut
							</p>
						</div>
					</div>
				</div>
			</section>
			<section
				className='section large'
				style={{ backgroundColor: '#18344c' }}
			>
				<div className='container'>
					<div
						className={styles.titleWrap}
						style={{ marginBottom: '0' }}
					>
						<h1 className={styles.ctaTitle}>
							This is a giant Give section encouraging people to
							give
						</h1>
						<p className={styles.ctaSubtitle}>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Suspendisse varius enim in eros elementum
							tristique. Duis cursus, mi quis viverra ornare, eros
							dolor interdum nulla.
						</p>
						<a href='#' className={styles.ctaButton}>
							Give Today
						</a>
					</div>
				</div>
			</section>
		</main>
	);
}
