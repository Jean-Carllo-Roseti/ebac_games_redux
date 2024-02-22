import { fireEvent, screen } from '@testing-library/react'

import Produto from '..'
import { renderizarComProvider } from '../../../utils/tests'

const jogo = {
  id: 2,
  categoria: 'RPG',
  imagem: '',
  plataformas: ['Windows', 'PS5', 'Xbox S/X'],
  preco: 199.9,
  precoAntigo: 250.9,
  titulo: 'Hogwarts Legacy'
}

describe('Testes para o component Produto.', () => {
  test('Deve renderizar corretamente.', () => {
    renderizarComProvider(<Produto game={jogo} />)
    expect(screen.getByText('Hogwarts Legacy')).toBeInTheDocument()
  })
  test('Deve adicionar ao carrinho', () => {
    const { store } = renderizarComProvider(<Produto game={jogo} />)
    const botao = screen.getByTestId('btn-adcionar-produto')
    fireEvent.click(botao)

    expect(store.getState().carrinho.itens).toHaveLength(1)
  })
})
