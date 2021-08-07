import React, { useState, useEffect } from 'react';
import './Products.scss';
import { Row } from 'react-bootstrap';
import { ProductCard } from '..';
import { OrganizationRepository } from '../../repositories';
import { AiFillPlusCircle } from 'react-icons/ai';
export const ProductsOrg = ({ productType, organizationData }) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState({});
  const fetchProductsByOrganization = async () => {
    const response = await OrganizationRepository.getProductsInOrganization(
      organizationData.org_id,
      productType.id
    );
    setProducts(response);
  };
  const fetch = async () => {
    fetchProductsByOrganization();
    setLoading(false);
  };
  useEffect(() => {
    fetch();
  }, []);
  return (
    <>
      {products.length && !loading > 0 ? (
        <div className="products">
          <h5 className="bold">
            <AiFillPlusCircle className="add-icon" size={25} />
            {productType.name}
          </h5>
          <hr />
          <Row className="">
            {products.map((product) => (
              <ProductCard product={product} />
            ))}
          </Row>
        </div>
      ) : null}
    </>
  );
};
