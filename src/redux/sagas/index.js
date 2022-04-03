import { fork } from "@redux-saga/core/effects";
import { GET } from "../../services/http.services";
import { takeLatest, put, call } from 'redux-saga/effects';
import { recoverProducts } from '../../redux/actions';

function* productSaga() {
  yield takeLatest('LOAD_PRODUCTS', loadProducts);
}

function* loadProducts() {
  const products = yield call(() => GET('products/'));
  yield put(recoverProducts(products));
}

export function* rootSaga() {
    yield fork(productSaga);
}