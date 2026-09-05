import * as S from './styles'
import { useAppSelector } from '../../hooks/useRedux'
import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'

const Header = () => {
  const itensNoCarrinho = useAppSelector((state) => state.cart.items)
  const favoritos = useAppSelector((state) => state.favoritos.items)

  const valorTotal = itensNoCarrinho.reduce((acc, item) => {
    acc += item.preco * (item.quantidade || 1)
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritos.length} favoritos</span>
        <img src={cesta} alt="Carrinho" />
        <span>
          {itensNoCarrinho.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
