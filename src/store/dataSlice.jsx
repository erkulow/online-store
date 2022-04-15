import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getData = createAsyncThunk('product/getData', async () => {
	try {
		const response = await fetch('https://fakestoreapi.com/products')

		if (!response.ok) {
			throw new Error('Server Error!')
		}
		const data = await response.json()
		return data
	} catch (error) {
		return error.message
	}
})
const initState = {
	products: [],
	status: null,
	error: null,
}
const productSlice = createSlice({
	name: 'product',
	initialState: initState,
	extraReducers: {
		[getData.fulfilled]: (state, { payload }) => {
			state.status = 'Success'
			state.products = payload
			console.log(payload)
		},
		[getData.rejected]: (state, { payload }) => {
			console.log(payload)
		},
	},
})
export const productActions = productSlice.actions
export default productSlice
