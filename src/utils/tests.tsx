// eslint-disable-next-line prettier/prettier
import { PreloadedState } from '@reduxjs/toolkit' // n sei o real motivo desde erro.
import { RenderOptions, render } from '@testing-library/react'

import { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'

import { AppStore, RootState, configuraStore } from '../store'

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>
  store?: AppStore
}

export function renderizarComProvider(
  elemento: React.ReactElement,
  {
    preloadedState = {},
    store = configuraStore(preloadedState),
    ...opcoesAdicionais
  }: ExtendedRenderOptions = {}
) {
  // eslint-disable-next-line @typescript-eslint/ban-types
  function Encapsulador({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>
  }

  return {
    store,
    ...render(elemento, {
      wrapper: Encapsulador,
      ...opcoesAdicionais
    })
  }
}
