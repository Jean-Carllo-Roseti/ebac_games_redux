import {
  combineReducers,
  configureStore,
  // eslint-disable-next-line prettier/prettier
  PreloadedState
} from '@reduxjs/toolkit'

import carrinhoRecuder from './reducers/carrinho'

import api from '../services/api'

const rootReducer = combineReducers({
  carrinho: carrinhoRecuder,
  [api.reducerPath]: api.reducer
})

export function configuraStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
    preloadedState
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof configuraStore>
