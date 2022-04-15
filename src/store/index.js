import { configureStore } from '@reduxjs/toolkit'
import productSlice from './dataSlice'

const store = configureStore({
	reducer: {
		product: productSlice.reducer,
	},
})
export default store
