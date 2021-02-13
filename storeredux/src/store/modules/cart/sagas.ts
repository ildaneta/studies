import { AxiosResponse } from 'axios';
import { all, takeLatest, select, call, put } from 'redux-saga/effects'
import { IState } from '../..';
import api from '../../../services/api';
import { addProducToCartFailure, addProducToCartRequest, addProducToCartSuccess } from './actions'
import { ActionTypes } from './types';

type CheckProductStockRequest = ReturnType<typeof addProducToCartRequest>

interface IStockResponse {
  id: number;
  quantity: number;
}

function* checkProductStock({ payload }: CheckProductStockRequest) {
  const { product } = payload;

  const currentQuantity: number = yield select((state: IState) => {
    return state.cart.items.find(item => item.product.id === product.id)?.quantity ?? 0
  });

  const availabeStockResponse: AxiosResponse<IStockResponse> = yield call(api.get, `stock/${product.id}`);

  if (availabeStockResponse.data.quantity > currentQuantity) {
    yield put(addProducToCartSuccess(product))
  } else {
    yield put(addProducToCartFailure(product.id))
  }
}

export default all([
  takeLatest(ActionTypes.addProducToCartRequest, checkProductStock)
])