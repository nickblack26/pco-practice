export const getUserInfo = async (accessToken, id) => {
	var myHeaders = new Headers();

	myHeaders.append('Authorization', `Bearer ${accessToken}`);

	var requestOptions = {
		method: 'GET',
		headers: myHeaders,
		redirect: 'follow',
	};

	try {
		const url = `https://api.planningcenteronline.com/people/v2/people/${id}?include=emails,phone_numbers,addresses`;
		const res = await fetch(url, requestOptions);
		if (res.ok) {
			const data = await res.json();
			return data;
		}
	} catch (err) {
		console.error(err);
	}
};

export const getEvents = async (accessToken) => {
	var myHeaders = new Headers();

	myHeaders.append('Authorization', `Bearer ${accessToken}`);

	var requestOptions = {
		method: 'GET',
		headers: myHeaders,
		redirect: 'follow',
	};

	try {
		const url = `https://api.planningcenteronline.com/registrations/v2/events?order=starts_at&filter=unarchived,published`;
		const res = await fetch(url, requestOptions);
		if (res.ok) {
			const data = await res.json();
			console.log(data);
			return data;
		}
	} catch (err) {
		console.error(err);
	}
};
