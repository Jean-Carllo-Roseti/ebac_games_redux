import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'

import Header from '..'
import { store } from '../../../store'

describe('Teste para o componente Header', () => {
  test('Deve renderizar corretamente', () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    )
    expect(screen.getByText('EBAC Games')).toBeInTheDocument()
  })
})
