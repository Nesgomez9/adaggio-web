import React, { useEffect, useState, useCallback } from 'react';
import { ProductRepository } from '../../repositories';
import { AffiliationsCard, InformationCard } from '..';
import { AiOutlineClose } from 'react-icons/ai';
import './product-information.scss';

export const ProductInformation = ({
  productInformation,
  setProductInformation,
}) => {
  const [productContributors, setProductContributors] = useState(null);
  const [loading, setLoading] = useState(true);
  const [areasSubjects, setAreasSubjects] = useState({});
  const [linesSubjects, setLinesSubjects] = useState({});
  const [themeSubjects, setThemeSubjects] = useState({});

  const fetchProductContributors = useCallback(async () => {
    console.log(productInformation);
    const response = await ProductRepository.getProductContributors(
      productInformation?.pro_id
    );

    setProductContributors(response);
  }, [setProductContributors, productInformation]);

  const fetchProductSubjects = useCallback(async () => {
    const areas = await ProductRepository.getProductSubjects(
      productInformation.pro_id,
      1
    );
    const lines = await ProductRepository.getProductSubjects(
      productInformation.pro_id,
      2
    );
    const themes = await ProductRepository.getProductSubjects(
      productInformation.pro_id,
      3
    );
    setAreasSubjects(areas);
    setLinesSubjects(lines);
    setThemeSubjects(themes);
  }, [
    setAreasSubjects,
    setLinesSubjects,
    setThemeSubjects,
    productInformation,
  ]);
  const deleteProductInformation = () => {
    setProductInformation(null);
  };
  useEffect(async () => {
    await fetchProductContributors();
    await fetchProductSubjects();
    setLoading(false);
    return () => console.log('unmounting...');
  }, [fetchProductContributors, fetchProductSubjects]);
  return (
    <div className="product-information">
      {loading ? null : (
        <div>
          <div className="product-information__header">
            <div className="product-information__header__title">
              {productInformation.title.toUpperCase()}
            </div>

            <div>
              <AiOutlineClose
                size={20}
                onClick={() => deleteProductInformation()}
                className="cursor-pointer"
              />
            </div>
          </div>
          <h6 className="product-information__resume_title">RESUMEN:</h6>
          <div className="product-information__resume_info">
            {productInformation.abstract}
          </div>
          <h6 className="product-information__resume_title">AUTOR(ES):</h6>
          <div className="row">
            {productContributors &&
              productContributors.map((object) => (
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
                    {productInformation.editor?.name}
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
                    {productInformation.publisher?.name}
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
            <div className="col-6">
              <div>
                <span className="bold">ÁREAS DE ACTUACIÓN</span>
                <div className="row">
                  {areasSubjects &&
                    areasSubjects.map((subject) => (
                      <InformationCard
                        key={subject?.id}
                        tittle={subject.subject?.name}
                      />
                    ))}
                </div>
              </div>
              <div>
                <span className="bold">LÍNEAS DE INVESTIGACIÓN</span>
                <div className="row">
                  {linesSubjects &&
                    linesSubjects.map((subject) => (
                      <InformationCard
                        key={subject?.id}
                        tittle={subject.subject.name}
                      />
                    ))}
                </div>
              </div>
              <div>
                <span className="bold">TEMAS ASOCIADOS</span>
                <div className="row">
                  {themeSubjects &&
                    themeSubjects.map((subject) => (
                      <InformationCard
                        key={subject?.id}
                        tittle={subject.subject.name}
                      />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
