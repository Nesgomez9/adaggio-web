import React, { useState, useEffect } from 'react';
import { CoAuthors, ProductsOrg } from '../../../components';
import { Container, Row } from 'react-bootstrap';
import { ProductRepository } from '../../../repositories';

export const ProductsOrganization = ({ organizationData }) => {
  const [loading, setLoading] = useState(true);
  const [productTypes, setProductTypes] = useState({});
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
              <div className="col-3"></div>
              <div className="col-6">
                {productTypes.map((type) => (
                  <ProductsOrg
                    productType={type}
                    organizationData={organizationData}
                  />
                ))}
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
