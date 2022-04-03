import './Mensajes.view.css';
import React, { useEffect } from 'react';
import Products from '../components/Products';
import { useSelector, useDispatch } from 'react-redux';
import { loadProductsAction } from '../redux/actions';

export default function ProductsView() {
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadProductsAction());
      }, []);

    return (
    <div className="Mensajes">
        <Products list={state.productos}></Products>
    </div>
    );
}