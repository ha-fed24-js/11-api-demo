const buttonApiKey = document.querySelector('#button-api-key')
const buttonTenant = document.querySelector('#button-tenant')
const buttonMenu = document.querySelector('#button-menu')

const apiUrl = 'https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com'
const apiKey = 'yum-BAPUdN5hTPLuk3iN'  // obs! Skaffa din egen :)
const tenant = "4b15"


buttonApiKey.addEventListener('click', async () => {
	const options = {
		method: 'POST'
	}
	const response = await fetch(apiUrl + '/keys', options)
	const data = await response.json()
	console.log('API-nyckel data:', data)
})


buttonTenant.addEventListener('click', async  () => {
	const options = {
		method: 'POST',
		body: JSON.stringify({ name: 'David Andersson' }),
		headers: {
			"Content-Type": 'application/json',
			"x-zocom": apiKey
		}
	}
	const response = await fetch(apiUrl + '/tenants', options)
	const data = await response.json()
	console.log('Tenant: ', data)
})


buttonMenu.addEventListener('click', async () => {
	const options = {
		headers: {
			"x-zocom": apiKey
		}
	}
	const response = await fetch(apiUrl + '/menu', options)
	const data = await response.json()
	console.log('Menyn:', data)
})