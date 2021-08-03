import React, { useState, useEffect } from 'react';
import './Products.scss';
import { Row } from 'react-bootstrap';
import { ProductCard } from '..';
import { ExpertRepository } from '../../repositories';
import { AiFillPlusCircle } from 'react-icons/ai';
export const Products = ({
  productType,
  expertData,
  setProductInformation,
  productInformation,
}) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState({});
  const fetchProductsByExpert = async () => {
    const response = await ExpertRepository.getExpertProductsById(
      expertData.exp_id,
      productType.id
    );
    setProducts(response);
  };
  const fetch = async () => {
    fetchProductsByExpert();
    setLoading(false);
  };
  useEffect(() => {
    fetch();
  }, []);
  return (
    <>
      {products.length && !loading > 0 ? (
        <div className="products">
          <div>
            <h5 className="bold">
              <AiFillPlusCircle className="add-icon" size={25} />
              {productType.name}
            </h5>
            <hr />
          </div>
          <Row className="">
            {products.map((product) => (
              <ProductCard
                product={product}
                setProductInformation={setProductInformation}
                productInformation={productInformation}
              />
            ))}
          </Row>
        </div>
      ) : null}
    </>
  );
};
