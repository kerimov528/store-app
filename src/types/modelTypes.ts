export type RegisterInputs = {
    email: string
    username: string
    password: string
}

export type LoginInputs = Omit<RegisterInputs, 'email'>

export type CustomTextFieldProps = {
    label: string
    name: string
    control: any
    type: string
    placeholder: string
}

export type Product = {
    id: number
    title: string
    price: string
    category: string
    description: string
    image: string
}

export interface IProductSliceState {
    loading: true | false
    products?: Product[]
    item: Product | undefined
    isError: any
}

export interface ICartItemProduct {
    productId: string
    quantity: number
}

export interface ICartItem {
    id: string
    usernId?: string
    date?: string
    products: []
}

export interface IUser {
    loading: true | false
    user: LoginInputs | undefined
    isSuccess: string | undefined
    isError: string | undefined
    isLoggedin: boolean
}
