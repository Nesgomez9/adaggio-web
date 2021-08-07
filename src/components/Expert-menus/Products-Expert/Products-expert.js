import React, { useState, useEffect } from 'react';
import {
  CoAuthors,
  Products,
  ProductInformation,
  ProductImage,
} from '../../../components';
import { Container, Row } from 'react-bootstrap';
import { ProductRepository } from '../../../repositories';

export const ProductsExpert = ({ expertData }) => {
  const [loading, setLoading] = useState(true);
  const [productTypes, setProductTypes] = useState({});
  const [productInformation, setProductInformation] = useState(null);
  const fetchProductTypes = async () => {
    const response = await ProductRepository.getProductTypes();
    setProductTypes(response);
  };
  const fetch = async () => {
    await fetchProductTypes();
    setLoading(false);
  };
  useEffect(() => {
    fetch();
  }, []);
  return (
    <>
      {loading ? null : (
        <Container fluid className="bg-gray">
          <div className="expert-body">
            <Row>
              <div className="col-3">
                {productInformation ? (
                  <ProductImage productInformation={productInformation} />
                ) : null}
              </div>
              <div className="col-6">
                {productInformation ? (
                  <ProductInformation
                    productInformation={productInformation}
                    setProductInformation={setProductInformation}
                  />
                ) : (
                  productTypes.map((type) => (
                    <Products
                      productType={type}
                      expertData={expertData}
                      setProductInformation={setProductInformation}
                      productInformation={productInformation}
                    />
                  ))
                )}
              </div>
              <div className="col-3">
                <CoAuthors />
              </div>
            </Row>
          </div>
        </Container>
      )}
    </>
  );
};
