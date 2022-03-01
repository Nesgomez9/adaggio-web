import React, { useState, useEffect, useCallback } from 'react';
import { ProductRepository } from '../../repositories';
import './product-image.scss';
export const ProductImage = ({ productInformation }) => {
  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(true);

  const fecthUrls = useCallback(async () => {
    const response = await ProductRepository.getProductUrls(
      productInformation?.pro_id
    );
    console.log(response);
    await setUrls(response);
  }, []);
  useEffect(async () => {
    setLoading(true);
    await fecthUrls();
    setLoading(false);
  }, [fecthUrls]);

  return (
    <div>
      {loading ? null : (
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
          <div className="product-image__links">
            {urls &&
              urls.map((url) => (
                <div>
                  <a
                    href={url.url}
                    target="_blank"
                    rel="noreferrer"
                    className="product-image__links-link"
                  >
                    {url.platform ? url.platform : 'Link Externo'}
                  </a>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};
