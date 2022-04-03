import React from 'react';
import ProductsView from '../../views/Products.view';

export default function Store() {
  return (
    <div className="Store">
      <h1>Bienvenido a mi tienda</h1>
      <div>
        <ProductsView></ProductsView>
      </div>
    </div>
  );
}