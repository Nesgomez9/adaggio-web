import React, { useState } from 'react';

import './Product-card.scss';

export const ProductCard = ({
  product,
  setProductInformation,
  productInformation,
}) => {
  console.log(product);
  return (
    <div className="product">
      {productInformation ? (
        <div className="product-information">
          <div className="product-information__title">
            {productInformation.title.toUpperCase()}
          </div>
          <h6 className="product-information__resume_title">RESUMEN:</h6>
          <div className="product-information__resume_info">
            {productInformation.abstract}
          </div>
          <h6 className="product-information__resume_title">AUTOR(ES):</h6>
        </div>
      ) : (
        <div onClick={() => setProductInformation(product)}>
          <p className="title">{product.title}</p>
          <div className="options">
            <div className="option ml-5">Comentarios</div>
            <div className="option">Compartir</div>
            <div className="option">Citar</div>
            <div className="option">Detalle</div>
            <div className="option">Guardar</div>
            <div className="option">Disponible en</div>
          </div>
        </div>
      )}
    </div>
  );
};
