import { combineReducers } from '@reduxjs/toolkit'
import addressUserSlice from './addressUser/addressUserSlice'
import categoryIdSlice from './categoryId/categoryIdSlice'
export default combineReducers({
  addressUserSlice,
  categoryIdSlice,
})
