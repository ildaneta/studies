import { useCallback } from 'react';
import { addProducToCart } from '../store/modules/cart/actions';
import { useDispatch } from 'react-redux';
import { IProduct } from "../store/modules/cart/types";

interface ICatalogItemProps {
  product: IProduct;
}

const CatalogItem = ({ product }: ICatalogItemProps) => {
  const dispatch = useDispatch()

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProducToCart(product))
  }, [dispatch, product])

  return (
    <article>
      <strong>{product.title}</strong> {" - "}
      <span>{product.price}</span> {"  "}

      <button
        type="button"
        onClick={() => handleAddProductToCart}
      >
        Comprar
      </button>
    </article>
  )
}

export default CatalogItem