import React, { useEffect, useState, useCallback } from 'react';
import { ProductRepository } from '../../repositories';
import { AffiliationsCard } from '..';
import './product-information.scss';
import product from '../../repositories/product';
const ProductInformation = ({ productInformation }) => {
  const [productContributors, setProductContributors] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchProductContributors = useCallback(async () => {
    console.log(productInformation);

    const response = await ProductRepository.getProductContributors(
      productInformation?.pro_id
    );
    const data = Array.from(new Set(response.map((a) => a.expert.id))).map(
      (id) => {
        return response.find((a) => a.expert.id === id);
      }
    );
    setProductContributors(data);
  }, [setProductContributors]);

  useEffect(async () => {
    await fetchProductContributors();
    setLoading(false);
  }, [fetchProductContributors]);
  return (
    <div className="product-information">
      {loading ? null : (
        <div>
          <div className="product-information__title">
            {productInformation.title.toUpperCase()}
          </div>
          <h6 className="product-information__resume_title">RESUMEN:</h6>
          <div className="product-information__resume_info">
            {productInformation.abstract}
          </div>
          <h6 className="product-information__resume_title">AUTOR(ES):</h6>
          <div className="row">
            {productContributors?.map((object) => (
              <div className="col-6">
                <AffiliationsCard object={object} />
              </div>
            ))}
          </div>
          <div className="row mt-4">
            <div className="col-6">
              <div className="mb-3 product-information__details">
                <div>
                  <span className="bold">EDITOR:</span>
                </div>
                <div>
                  <div className="product-information__details-link cursor-pointer">
                    {productInformation.editor.name}
                  </div>
                </div>
              </div>

              <div className="mb-3 product-information__details">
                <div>
                  <span className="bold">FECHA DE PUBLICACIÓN:</span>
                </div>
                <div>{productInformation.date_created}</div>
              </div>

              <div className="mb-3 product-information__details">
                <div>
                  <span className="bold">PUBLICADO EN:</span>
                </div>

                <div>
                  <div className="product-information__details-link cursor-pointer">
                    {productInformation.publisher.name}
                  </div>
                </div>
              </div>

              <div className="mb-3 product-information__details">
                <div>
                  <span className="bold ">VOLUMEN:</span>
                </div>
                <div> {productInformation.volumen}</div>
              </div>

              <div className="mb-3 product-information__details">
                <div>
                  <span className="bold">NÚMERO:</span>
                </div>
                <div> {productInformation.number}</div>
              </div>

              <div className="mb-3 product-information__details">
                <div>
                  <span className="bold">PAGINA INICIAL: </span>
                </div>
                <div> {productInformation.pages_start}</div>
              </div>

              <div className="mb-3 product-information__details">
                <div>
                  <span className="bold">PAGINA FINAL:</span>
                </div>
                <div> {productInformation.pages_end}</div>
              </div>

              <div className="mb-3 product-information__details">
                <div>
                  <span className="bold">DOI:</span>
                </div>

                <div className="">
                  <a
                    href={productInformation.doi}
                    target="_blank"
                    rel="noreferrer"
                    className="product-information__details-link"
                  >
                    https://www.doi.org/
                  </a>
                </div>
              </div>

              <div className="mb-3 product-information__details">
                <span className="bold">CONTRATO:</span>
                <div>{productInformation.agreement_number}</div>
              </div>

              <div className="mb-3 product-information__details">
                <div>
                  <span className="bold">PMID:</span>
                </div>
                <div>{productInformation.pm_id}</div>
              </div>

              <div className="mb-3 product-information__details">
                <div>
                  <span className="bold">ID ADDAGIO:</span>
                </div>
                <div>{productInformation.pro_id}</div>
              </div>
            </div>
            <div className="col-6">asd</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductInformation;
