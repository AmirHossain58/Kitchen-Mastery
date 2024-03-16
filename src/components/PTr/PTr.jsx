import React from 'react';

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

export default PTr;