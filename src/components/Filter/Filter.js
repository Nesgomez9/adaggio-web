import React, { useState } from 'react';
import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io';
import './Filter.scss';

export const Filter = ({ name, opts }) => {
  const [dropList, setDropList] = useState(true);

  const chDropList = () => {
    setDropList(!dropList);
  };

  console.log(name);
  console.log(opts);

  return (
    <>
      {dropList ? (
        <div className="main__filters-btn" onClick={chDropList}>
          <span>Tipo de Experto</span>
          <span>
            <IoIosArrowForward size={12} />
          </span>
        </div>
      ) : (
        <div>
          <div className="main__filters-btn" onClick={chDropList}>
            <span>Tipo de Experto</span>
            <span>
              <IoIosArrowDown size={12} />
            </span>
          </div>
          <div className="main__filters-container">
            <input type="checkbox" />
            <div className="main__filters-filter">
              <span>Investigador Senior</span>
              <span>&#40;245&#41;</span>
            </div>
          </div>
          <div className="main__filters-container">
            <input type="checkbox" />
            <div className="main__filters-filter">
              <span>Investigador Asociado</span>
              <span>&#40;245&#41;</span>
            </div>
          </div>
          <div className="main__filters-container">
            <input type="checkbox" />
            <div className="main__filters-filter">
              <span>Investigador Emerito</span>
              <span>&#40;245&#41;</span>
            </div>
          </div>
          <div className="main__filters-container">
            <input type="checkbox" />
            <div className="main__filters-filter">
              <span>Investigador Junior</span>
              <span>&#40;245&#41;</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
