import React from 'react';
import { signIn, getProviders, getSession } from 'next-auth/react';

export async function getServerSideProps() {
	const providers = await getProviders();

	return {
		props: {
			providers,
		},
	};
}

const Login = ({ providers }) => {
	return (
		<div>
			{Object.values(providers).map((provider) => (
				<button
					onClick={() => signIn(provider.id, { callbackUrl: '/' })}
				>
					Login with {provider.name}
				</button>
			))}
		</div>
	);
};

export default Login;
