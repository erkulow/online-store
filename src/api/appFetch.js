import { SERVER_BASE_URL } from '../utils/constants/general'

export const appFetch = async (options) => {
	try {
		let path = options.path

		const requestOptions = {
			method: options.method || 'GET',
			headers: { 'Content-Type': 'application/json' },
		}

		if (options.method !== 'GET') {
			requestOptions.body = JSON.stringify(options.body || {})
		}

		if (options.params) {
			// params  = {limit = 5 , page: 1, name: 't-shirt'}
			// [limit=5, page:1]
			// products?limit=5&page=1&name=t-shirt
			const queryParamsStringValue = Object.keys(options.params).map(paramKey => `${paramKey}=${options.params[paramKey]}`).join('&')
			path = `${path}?${queryParamsStringValue}`
		}

		const response = await fetch(
			`${SERVER_BASE_URL}/${path}`,
			requestOptions,
		)

		if (!response.ok) {
			throw new Error('Some thing went wrong')
		}


		return response.json()
	} catch (e) {
		throw new Error(e.message)
	}
}
