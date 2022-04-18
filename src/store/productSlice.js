import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { appFetch } from '../api/appFetch'

// Get All Ptoducts
export const getAsyncProducts = createAsyncThunk('product/getAsyncProducts',async (page) => {
		try { return await appFetch({ path: 'products', method: 'GET', params: { limit : 100, page }})}
		catch (error){ return error.message }
	},
)
// Get Men`s-Clothing Ptoducts
export const getMensClothingProduct = createAsyncThunk('men`s-clothing/getMensClothingProduct', async (page)=>{
	try{return await appFetch({path: `products/category/men's clothing`, method: 'GET'})}
	catch(error){return error.message}
})
// Get Jewelery Ptoducts
export const getJeweleryProducts = createAsyncThunk('jewelery/getJeweleryProducts', async (page)=>{
	try{return await appFetch({path: 'products/category/jewelery', method: 'GET'})}
	catch(error){return error.message}
})
// Get Electronics Ptoducts
export const getElectronicsProducts = createAsyncThunk('electronics/getElectronicsProducts', async (page)=>{
	try{return await appFetch({path: 'products/category/electronics', method: 'GET'})}
	catch(error){return error.message}
})
// Get Women`s-Clothing Ptoducts
export const getWomensClothingProduct = createAsyncThunk('jewelery/getWomensClothingProduct', async (page)=>{
	try{return await appFetch({path: `products/category/women's clothing`, method: 'GET'})}
	catch(error){return error.message}
})

const initState = {
	products: [],
	basket: [],
	status: null,
	error: null,
	isLoading: false,
	showModal: false,
}
const productSlice = createSlice({
	name: 'product',
	initialState: initState,
	reducers: {
		addToBasket(state, action){
			state.products.map((el)=>{
				if(action.payload === el.id){
					state.basket.push(el)
				}
			})
		},
		getItemLocalStorage(state,action){
			console.log(action.payload);
			state.basket = action.payload
		}
	},
	extraReducers: {
		[getAsyncProducts.pending]: (state) => { state.isLoading = true },
		[getJeweleryProducts.pending]: (state) => { state.isLoading = true },
		[getMensClothingProduct.pending]: (state) => { state.isLoading = true },
		[getElectronicsProducts.pending]: (state) => { state.isLoading = true },
		[getWomensClothingProduct.pending]: (state) => { state.isLoading = true },
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
			console.log('mens');
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
		[getAsyncProducts.rejected]: (state) => { state.error = 'Error' },
		[getJeweleryProducts.rejected]: (state) => { state.error = 'Error' },
		[getMensClothingProduct.rejected]: (state) => { state.error = 'Error' },
		[getElectronicsProducts.rejected]: (state) => { state.error = 'Error' },
		[getWomensClothingProduct.rejected]: (state) => { state.error = 'Error' },
	},
})
export const productActions = productSlice.actions
export default productSlice
