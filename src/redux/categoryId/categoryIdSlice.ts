import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface categoryIdState {
  categoryId: string | null
}

const initialState: categoryIdState = {
  categoryId: null,
}

const categoryIdSlice = createSlice({
  name: 'categoryIdSlice',
  initialState,
  reducers: {
    categoryId: (state, action: PayloadAction<string>) => {
      state.categoryId = action.payload
    },
  },
})

export const { categoryId } = categoryIdSlice.actions
export default categoryIdSlice.reducer
