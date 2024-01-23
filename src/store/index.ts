import { configureStore } from '@reduxjs/toolkit'

import carrinhoRecuder from './reducers/carrinho'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoRecuder
  }
})

export type RootReducer = ReturnType<typeof store.getState>
