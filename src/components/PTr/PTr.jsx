import React from 'react';
import PropTypes from 'prop-types';
const PTr = ({i,idx}) => {
    return (
        <>
              <tr className="bg-[#28282808]">
            <th>{idx+1}</th>
            <td>{i.recipe_name}</td>
            <td>{i.preparing_time}</td>
            <td>{i.calories}</td>
            </tr>
        </>
    );
};
PTr.propTypes = {
    i: PropTypes.object,
    idx:PropTypes.number
  };
export default PTr;