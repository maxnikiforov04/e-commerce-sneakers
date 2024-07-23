import { configureStore,combineReducers } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import ProductReducer from './reducers/ProductSlice.ts'
  
const rootReducer = combineReducers({  
  products: ProductReducer,
})  
export const store = configureStore({
   reducer: rootReducer,  
})

export type RootState = ReturnType<typeof store.getState>
export const AppDispatch:()=>typeof store.dispatch = useDispatch;
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>> =useSelector