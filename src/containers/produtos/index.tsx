import React from 'react'
import { useGetProductsQuery } from '../../store/api/productsApi'
import Produto from '../../components/Produto'
import * as S from './styles'

const ProdutosComponent = () => {
  const { data: produtos, isLoading, error } = useGetProductsQuery()

  if (isLoading) return <div>Carregando produtos...</div>
  if (error) return <div>Erro ao carregar produtos</div>
  if (!produtos || produtos.length === 0)
    return <div>Nenhum produto encontrado</div>

  return (
    <S.Produtos>
      {produtos.map((produto) => (
        <Produto key={produto.id} produto={produto} />
      ))}
    </S.Produtos>
  )
}

export default ProdutosComponent
