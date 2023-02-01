import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { Product, IProductSliceState } from '../../types'

const initialState: IProductSliceState = {
    loading: false,
    products: [],
    item: undefined,
    isError: ''
}

export const getProducts = createAsyncThunk(
    'products/getAll',
    async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products')
            const data: Product[] = await response.data
            return data
        } catch (error) {
            initialState.isError = error;
        }
    }
)

export const getProductsById = createAsyncThunk(
    'products/getById',
    async (id: string | undefined) => {
        try {
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
            const data: Product = await response.data
            return data
        } catch (error) {
            initialState.isError = error;
        }
    }
)

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        clearProduct: (state) => {
            state.item = undefined
        }
    },
    extraReducers(builder) {
        builder.addCase(getProducts.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.products = action.payload
            state.loading = false;
        })
        builder.addCase(getProducts.rejected, (state, action) => {
            state.loading = false;
            state.isError = action.payload;
        })

        builder.addCase(getProductsById.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(getProductsById.fulfilled, (state, action) => {
            state.item = action.payload
            state.loading = false;
        })
        builder.addCase(getProductsById.rejected, (state, action) => {
            state.loading = false;
            state.isError = action.payload;
        })
    },
})

export const { clearProduct } = productSlice.actions
export default productSlice.reducer