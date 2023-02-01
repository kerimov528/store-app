import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import cardReducer from '../features/card/cardSliceM'
import productReducer from '../features/product/productSlice'
// import userReducer from '../features/card/cardSliceM'

const store = configureStore({
    reducer: {
        auth: authReducer,
        product: productReducer,
        card: cardReducer,
        // user: userReducer
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export default store
