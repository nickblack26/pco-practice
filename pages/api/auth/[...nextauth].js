import NextAuth from 'next-auth';

export default NextAuth({
	debug: true,
	providers: [
		{
			id: 'pco',
			name: 'PCO',
			type: 'oauth',
			authorization: {
				url: 'https://api.planningcenteronline.com/oauth/authorize',
				params: {
					response_type: 'code',
					scope: 'people',
				},
			},
			token: {
				url: 'https://api.planningcenteronline.com/oauth/token',
			},
			session: { strategy: 'jwt' },
			userinfo:
				'https://api.planningcenteronline.com/people/v2/me?include=emails',
			clientId: process.env.PCO_CLIENT_ID,
			clientSecret: process.env.PCO_CLIENT_SECRET,

			profile: (profile) => {
				return {
					id: profile?.data.id,
					name: profile?.data?.attributes.name,
					email: profile?.data?.included?.attributes?.address,
					image: profile?.data?.attributes?.avatar,
				};
			},
		},
	],
	secret: process.env.NEXTAUTH_SECRET,
	pages: {
		signIn: '/login',
	},
	callbacks: {
		async jwt({ token, account }) {
			if (account) {
				token.sub = account.providerAccountId;
				token.accessToken = account.access_token;
			}
			return token;
		},

		async session({ session, token }) {
			const id = parseInt(token.sub);
			session.user.id = id;
			session.user.accessToken = token.accessToken;
			return session;
		},
	},
});
