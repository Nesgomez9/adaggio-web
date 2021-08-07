import React from 'react';
import './Product-card.scss';

export const ProductCard = ({ product, setProductInformation }) => {
  console.log(product);
  return (
    <div className="product">
      <div onClick={() => setProductInformation(product)}>
        <span className="title cursor-pointer">{product.title}</span>
        <div className="options">
          <div className="option ml-5">Comentarios</div>
          <div className="option">Compartir</div>
          <div className="option">Citar</div>
          <div className="option">Detalle</div>
          <div className="option">Guardar</div>
          <div className="option">Disponible en</div>
        </div>
      </div>
    </div>
  );
};
