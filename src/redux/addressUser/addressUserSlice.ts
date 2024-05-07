import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface addressUserState {
  localidade: string | null
  logradouro: string | null
}

const initialState: addressUserState = {
  localidade: null,
  logradouro: null,
}

const adressUserSlice = createSlice({
  name: 'addressUser',
  initialState,
  reducers: {
    addressUser: (
      state,
      action: PayloadAction<{ localidade: string; logradouro: string }>,
    ) => {
      state.localidade = action.payload.localidade
      state.logradouro = action.payload.logradouro
    },
    removeAddress: () => {
      return initialState
    },
  },
})

export const { addressUser, removeAddress } = adressUserSlice.actions
export default adressUserSlice.reducer
