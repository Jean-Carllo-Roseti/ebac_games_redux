import { screen } from '@testing-library/react'
import Header from '..'

import { renderizarComProvider } from '../../../utils/tests'

describe('Teste para o componente Header', () => {
  test('Deve renderizar corretamente', () => {
    renderizarComProvider(<Header />)
    expect(screen.getByText('EBAC Games')).toBeInTheDocument()
  })
  test('Deve renderizar com 2 itens no carrinho', () => {
    renderizarComProvider(<Header />, {
      preloadedState: {
        carrinho: {
          itens: [
            {
              id: 1,
              categoria: 'RPG',
              imagem: '',
              plataforma: ['Windows'],
              preco: 150.9,
              precoAntigo: 199.9,
              titulo: 'Elden Ring'
            },
            {
              id: 2,
              categoria: 'RPG',
              imagem: '',
              plataforma: ['Windows', 'PS5', 'Xbox S/X'],
              preco: 199.9,
              precoAntigo: 250.9,
              titulo: 'Hogwarts Legacy'
            }
          ]
        }
      }
    })
    expect(screen.getByTestId('qtd-carrinho').innerHTML).toContain('2 itens')
  })
})
