import React from 'react';
import './Product-card.scss';

export const ProductCard = ({ product, setProductInformation }) => {
  console.log(product);
  return (
    <div className="product">
      <div>
        <div>
          <span
            className="title cursor-pointer"
            onClick={() => setProductInformation(product)}
          >
            {product.title}
          </span>
        </div>

        <div className="options">
          <div className="option ">Comentarios</div>
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
