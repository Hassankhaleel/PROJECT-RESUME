import { configureStore } from '@reduxjs/toolkit'
import UserSlice from './UserSlice'
import CartSlice from '../CartSlice'
const Store = configureStore(
    {
        reducer: {
            user: UserSlice,
            cart: CartSlice
        }
    }
)
export default Store;