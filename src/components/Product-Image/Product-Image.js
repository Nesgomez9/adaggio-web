import React from 'react';
import './product-image.scss';
export const ProductImage = ({ productInformation }) => {
  console.log(productInformation);
  return (
    <div className="product-image">
      <div className="bold">TIPO DE PRODUCTO:</div>
      <div className="bold product-image__type">
        {productInformation.product_type.name}
      </div>
      <div className="mt-3 ">
        <img
          alt="Cover page"
          src={productInformation.image_url}
          className="product-image__cover-page"
        />
      </div>
      <hr className="product-image__line" />
      <div className="bold mt-3">Comentarios</div>
      <div className="bold mt-3">Compartir</div>
      <div className="bold mt-3">Citar</div>
      <div className="bold mt-3">Guardar</div>
      <div className="bold mt-3">Disponible en: </div>
    </div>
  );
};
