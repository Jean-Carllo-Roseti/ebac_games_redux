import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { screen } from '@testing-library/react'

import Produto from '..'
import { renderizarComProvider } from '../../../utils/tests'

const mocks = [
  {
    id: 1,
    categoria: 'E-Sport',
    imagem: '',
    plataformas: ['PS5', 'Xbox S/X'],
    preco: 159.9,
    precoAntigo: 250.9,
    titulo: 'FIFA'
  },
  {
    id: 2,
    categoria: 'RPG',
    imagem: '',
    plataformas: ['Windows', 'PS5', 'Xbox S/X'],
    preco: 199.9,
    precoAntigo: 250.9,
    titulo: 'Hogwarts Legacy'
  },
  {
    id: 3,
    categoria: 'FPS',
    imagem: '',
    plataformas: ['Windows', 'PS5', 'Xbox S/X'],
    preco: 149.9,
    precoAntigo: 300.9,
    titulo: 'Over Watch'
  },
  {
    id: 4,
    categoria: 'Combate',
    imagem: '',
    plataformas: ['PS5', 'Xbox S/X'],
    preco: 199.9,
    precoAntigo: 199.9,
    titulo: 'Mortal Combate'
  }
]

const server = setupServer(
  rest.get(
    'http://localhost:4000/produtos',
    (requisicao, resposta, contexto) => {
      return resposta(contexto.json(mocks))
    }
  )
)

describe('Teste para containers Produtos', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  test('Deve renderizar corretamente', () => {
    renderizarComProvider(<Produto />)
    expect(screen.getByText('Carregando...')).toBeInTheDocument()
  })
})
