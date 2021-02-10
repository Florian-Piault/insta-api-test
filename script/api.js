let URL_Auth = "https://api.instagram.com/oauth/authorize?client_id=731741447749298&redirect_uri=http://127.0.0.1:5500/index.html&scope=user_profile,user_media&response_type=code";

function fecthData(url){
	return new Promise( (resolve, reject) => {
		// Get content from API with Fetch API (https://developer.mozilla.org/fr/docs/Web/API/Fetch_API)
		fetch(`${url}`)
		.then( response => {
			// Display response
			console.log(response);

			// Check response
			return response.ok
				? response.json()
				: reject('Fetch error', response);
			})
			.then( data => {
			// Display json data
			console.log(data);

			// Resolve Promise
			return resolve(data);
		})
		.catch( fetchError => {
			return reject(fetchError);
		});
	});
};

fetch(URL_Auth)
	.then(d => {
		console.log(d);
	})
	.catch(e => console.error)