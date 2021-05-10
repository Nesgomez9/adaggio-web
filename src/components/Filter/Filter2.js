import React, { useState } from 'react';
import { HiPlusCircle, HiMinusCircle } from 'react-icons/hi';
import './Filter2.scss';

export const Filter2 = ({ filter }) => {
  const [dropList, setDropList] = useState(true);

  const { name, opts } = filter;

  return (
    <>
      {dropList ? (
        <div
          className="main_filters_btn"
          onClick={() => setDropList(!dropList)}
        >
          {name}
          <HiPlusCircle className="main_filters_sign" size={22} />
        </div>
      ) : (
        <div>
          <div
            className="main_filters_btn"
            onClick={() => setDropList(!dropList)}
          >
            {name}
            <HiMinusCircle className="main_filters_sign" size={22} />
          </div>
          {opts.map((opt) => (
            <div className="main_filters_container">
              <input type="checkbox" />
              <div className="main_filters_filter">
                <span>{opt[0]}</span>
                <span>&#40;{opt[1]}&#41;</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
