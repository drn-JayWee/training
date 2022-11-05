import React from 'react';

export const API_URL_PUBLIC = 'https://api.github.com/gists/public'
export const API_URL_GIST = 'https://api.github.com/gists/'


const Api = () => {

	const p = new Promise((resolve, reject) => {
		setTimeout(() => resolve('Hey!'), 1000)
	})
	p.then(value => console.log(value + ' All good')) // выведет 'Hey! All good'
		.catch(err => console.warn(err))
		.finally(() => console.log('cleanup'))

	fetch('https://api.github.com/gists/public')
		.then(response => {
			if (!response.ok) {
				throw new Error(`Request failed with status ${response.status}`)
			}
			return response.json()
		})
		.then(result => console.log(result))
		.catch(err => console.log(err))
	// С помощью второго аргумента указываются опции запроса, напр., метод
	fetch('https://api.github.com/gists/public', {
		method: 'POST',
		mode: 'cors',
		cache: 'no-cache',
		headers: {
			'Content-Type': 'application/json',
		},
	})

	// then(response => {
	// 	if (!response.ok) {
	// 		throw new Error(`Request failed with status ${response.status}`)
	// 	}
	// 	return response.json()
	// })
	// 	.then(result => console.log(result))
	// 	.catch(err => console.log(err))


	return (
		<div>
			
		</div>
	);
};

export default Api;