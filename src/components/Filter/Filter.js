import React, { useState } from 'react';
import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io';
import './Filter.scss';
import { Form } from 'react-bootstrap';

export const Filter = ({
  name,
  opts,
  filterName,
  setFilterValues,
  filterValues,
}) => {
  const [dropList, setDropList] = useState(true);
  const [selected, setSelected] = useState({});
  const chDropList = () => {
    setDropList(!dropList);
  };
  const handleChange = (e) => {
    setFilterValues({ ...filterValues, [filterName]: e.target.value });
  };
  return (
    <div className="">
      {dropList ? (
        <div className="main__filters-btn" onClick={chDropList}>
          <span>{name}</span>
          <span>
            <IoIosArrowForward size={12} />
          </span>
        </div>
      ) : (
        <div>
          <div className="main__filters-btn " onClick={chDropList}>
            <span>{name}</span>
            <span>
              <IoIosArrowDown size={12} />
            </span>
          </div>
          <div className="filter ">
            {opts.map((opt) => (
              <div className="main__filters-container ">
                <Form.Check
                  type="radio"
                  name={`formHorizontalRadios ${filterName}`}
                  id="formHorizontalRadios1"
                  value={opt.name}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                <div className="main__filters-filter">
                  <span>{opt.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
