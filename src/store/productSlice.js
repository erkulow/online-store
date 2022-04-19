import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { appFetch } from '../api/appFetch'

// Get All Ptoducts
export const getAsyncProducts = createAsyncThunk(
	'product/getAsyncProducts',
	async (page) => {
		try {
			return await appFetch({
				path: 'products',
				method: 'GET',
				params: { limit: 100, page },
			})
		} catch (error) {
			return error.message
		}
	},
)
// Get Men`s-Clothing Ptoducts
export const getMensClothingProduct = createAsyncThunk(
	'men`s-clothing/getMensClothingProduct',
	async (page) => {
		try {
			return await appFetch({
				path: `products/category/men's clothing`,
				method: 'GET',
			})
		} catch (error) {
			return error.message
		}
	},
)
// Get Jewelery Ptoducts
export const getJeweleryProducts = createAsyncThunk(
	'jewelery/getJeweleryProducts',
	async (page) => {
		try {
			return await appFetch({
				path: 'products/category/jewelery',
				method: 'GET',
			})
		} catch (error) {
			return error.message
		}
	},
)
// Get Electronics Ptoducts
export const getElectronicsProducts = createAsyncThunk(
	'electronics/getElectronicsProducts',
	async (page) => {
		try {
			return await appFetch({
				path: 'products/category/electronics',
				method: 'GET',
			})
		} catch (error) {
			return error.message
		}
	},
)
// Get Women`s-Clothing Ptoducts
export const getWomensClothingProduct = createAsyncThunk(
	'jewelery/getWomensClothingProduct',
	async (page) => {
		try {
			return await appFetch({
				path: `products/category/women's clothing`,
				method: 'GET',
			})
		} catch (error) {
			return error.message
		}
	},
)

const initState = {
	products: [],
	basket: localStorage.getItem('basket')
		? JSON.parse(localStorage.getItem('basket'))
		: [],
	status: null,
	error: null,
	isLoading: false,
	showModal: false,
}
const productSlice = createSlice({
	name: 'product',
	initialState: initState,
	reducers: {
		addToBasket(state, action) {
			const currentItem = state.basket.find(
				(findIdInProducts) => findIdInProducts.id === action.payload.id,
			)
			if (!currentItem) {
				state.basket.push({
					...action.payload,
					amount: 1,
					totalProductPrice: action.payload.price,
				})
			} else {
				state.basket = state.basket.map((productskey) => {
					if (productskey.id === action.payload.id) {
						productskey.amount = Number(productskey.amount) + 1
						productskey.totalProductPrice =
							productskey.price * productskey.amount
					}
					return productskey
				})
			}
		},
		removeProductFromBasket(state, { payload: id }) {
			const productItem = state.basket.find(
				(product) => product.id === id,
			)
			if (productItem.amount === 1) {
				state.basket = state.basket.filter(
					(product) => product.id !== id,
				)
			} else {
				state.basket = state.basket.map((productskey) => {
					if (productskey.id === id) {
						productskey.amount = Number(productskey.amount) - 1
						productskey.totalProductPrice =
							productskey.price * productskey.amount
					}
					return productskey
				})
			}
		},

		searchHandler(state, action) {
			state.products = action.payload
		},
		getItemLocalStorage(state, action) {
			state.basket = action.payload
		},
		deleteCardHandler(state, action) {
			state.basket = state.basket.filter(
				(product) => product.id !== action.payload.id,
			)
		},
	},
	extraReducers: {
		[getAsyncProducts.pending]: (state) => {
			state.isLoading = true
		},
		[getJeweleryProducts.pending]: (state) => {
			state.isLoading = true
		},
		[getMensClothingProduct.pending]: (state) => {
			state.isLoading = true
		},
		[getElectronicsProducts.pending]: (state) => {
			state.isLoading = true
		},
		[getWomensClothingProduct.pending]: (state) => {
			state.isLoading = true
		},
		// -----------------------------------------------------------------
		[getAsyncProducts.fulfilled]: (state, { payload }) => {
			state.products = payload
			state.status = 'Success'
			state.isLoading = false
		},
		[getMensClothingProduct.fulfilled]: (state, { payload }) => {
			state.status = 'Success'
			state.products = payload
			state.isLoading = false
		},
		[getJeweleryProducts.fulfilled]: (state, { payload }) => {
			state.status = 'Success'
			state.products = payload
			state.isLoading = false
		},
		[getElectronicsProducts.fulfilled]: (state, { payload }) => {
			state.status = 'Success'
			state.products = payload
			state.isLoading = false
		},
		[getWomensClothingProduct.fulfilled]: (state, { payload }) => {
			state.status = 'Success'
			state.products = payload
			state.isLoading = false
		},
		// -----------------------------------------------------------------
		[getAsyncProducts.rejected]: (state) => {
			state.error = 'Error'
		},
		[getJeweleryProducts.rejected]: (state) => {
			state.error = 'Error'
		},
		[getMensClothingProduct.rejected]: (state) => {
			state.error = 'Error'
		},
		[getElectronicsProducts.rejected]: (state) => {
			state.error = 'Error'
		},
		[getWomensClothingProduct.rejected]: (state) => {
			state.error = 'Error'
		},
	},
})
export const productActions = productSlice.actions
export default productSlice
