import { ActionTypes, IProduct } from "./types";

export function addProducToCartRequest(product: IProduct) {
  return {
    type: ActionTypes.addProducToCartRequest,
    payload: {
      product
    }
  }
}

export function addProducToCartSuccess(product: IProduct) {
  return {
    type: ActionTypes.addProducToCartSuccess,
    payload: {
      product
    }
  }
}

export function addProducToCartFailure(productId: number) {
  return {
    type: ActionTypes.addProducToCartFailure,
    payload: {
      productId
    }
  }
}