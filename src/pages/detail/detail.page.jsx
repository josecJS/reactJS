import React from 'react';
import { useParams } from 'react-router-dom';
import DetailProduct from '../../components/DetailProduct'

export default function Detail() {
    let { id } = useParams();


  return (
    <div className="Detail">
      <DetailProduct id={id}></DetailProduct>
    </div>
  );
}