import React from 'react';

const Tr = ({recip,idx,handlePreparing}) => {
    return (
        <>
            <tr className="bg-[#28282808]">
                        <th>{idx+1}</th>
                        <td>{recip.recipe_name}</td>
                        <td>{recip.preparing_time}</td>
                        <td>{recip.calories}</td>
                        <td><button onClick={()=>handlePreparing(recip)} className="btn bg-[#0BE58A] text-lg font-semibold rounded-full border-0" >Preparing</button></td>
                    </tr>
        </>
    );
};

export default Tr;