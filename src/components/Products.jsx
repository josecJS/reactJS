import React from 'react';
import '../components/MensajesTable/MensajesTable.css';
import ProductItem from './Product';


export default function Products(props) {
  return (props.list.length ?
      <div>
        {props.list.map(((product) => 
          (
            <ProductItem key={product.id} product={product}></ProductItem>
          )
        ))}
      </div>
  : '');
}