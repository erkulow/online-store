/* eslint-disable prefer-const */
import { SERVER_BASE_URL } from '../utils/constants/general'
export const appFetch = async (options) => {
   try {
      let { path, body, method, params } = options
      const requestOptions = {
         method: method || 'GET',
         headers: { 'Content-Type': 'application/json' },
      }
      if (method !== 'GET') {
         requestOptions.body = JSON.stringify(body || {})
      }
      if (params) {
         // params  = {limit = 5 , page: 1, name: 't-shirt'}
         // [limit=5, page:1]
         // products?limit=5&page=1&name=t-shirt
         const queryParamsStringValue = Object.keys(params)
            .map((paramKey) => `${paramKey}=${params[paramKey]}`)
            .join('&')
         path = `${path}?${queryParamsStringValue}`
      }
      const response = await fetch(`${SERVER_BASE_URL}/${path}`, requestOptions)
      if (!response.ok) {
         throw new Error('Some thing went wrong')
      }
      return response.json()
   } catch (e) {
      throw new Error(e.message)
   }
}
