import { useCallback } from 'react';
import { addProducToCartRequest } from '../store/modules/cart/actions';
import { useDispatch, useSelector } from 'react-redux';
import { IProduct } from "../store/modules/cart/types";
import { IState } from '../store';

interface ICatalogItemProps {
  product: IProduct;
}

const CatalogItem = ({ product }: ICatalogItemProps) => {
  const dispatch = useDispatch()

  const hasFailedStockCheck = useSelector<IState, boolean>(state => {
    return state.cart.failedStockCheck.includes(product.id)
  })

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProducToCartRequest(product))
  }, [dispatch, product])

  return (
    <article>
      <strong>{product.title}</strong> {" - "}
      <span>{product.price}</span> {"  "}

      <button
        type="button"
        onClick={handleAddProductToCart}
      >
        Comprar
      </button>

      {hasFailedStockCheck && <span style={{ color: 'red' }}>Falta de estoque</span>}
    </article>
  )
}

export default CatalogItem