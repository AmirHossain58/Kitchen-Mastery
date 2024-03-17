import Tr from "../Tr/Tr";
import PTr from "../PTr/PTr";
import PropTypes from 'prop-types';
const SideBar = ({addRecipes,handlePreparing,addPreparing}) => {
    const totalTime=addPreparing.reduce((p,c)=>p+parseInt(c.preparing_time),0)
    const totalCalories=addPreparing.reduce((p,c)=>p+parseInt(c.calories),0)
    return (
      
        <div className="border-2 ml-6 rounded-xl">
            
            <div>
          
                <h1 className="text-2xl mt-6 mb-4 font-semibold text-center">Want to cook: {addRecipes.length}</h1>
                <div className="px-10 mb-6"><hr /></div>
                <div className="overflow-x-auto">
                <table className="table ">
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    {
                        addRecipes.map((recip,idx)=><Tr 
                        key={recip.recipe_id} 
                        recip={recip}
                        idx={idx}
                        handlePreparing={handlePreparing}
                        ></Tr>)
                    }
                    </tbody>
                </table>
                </div>
            </div>
            <div>
                <h1  className="text-2xl mt-6 mb-4 font-semibold text-center">Currently cooking: {addPreparing.length}</h1>
                <div className="px-10 mb-6"><hr /></div>
                <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                    
                    </tr>
                    </thead>
                    <tbody>

                        {
                           addPreparing.map((i,idx)=><PTr key={idx} i={i} idx={idx}></PTr>) 
                        }
                    </tbody>
                </table>
                </div>
                <div className="flex justify-center gap-12 text-lg font-semibold my-4 mr-4 text-[#282828CC]">
                    <p>Total Time = {totalTime}<br /> <span> minutes</span></p>
                    <p>Total Calories = {totalCalories}<br /> <span> calories</span></p>
                </div>
            </div>
        </div>
    );
};
SideBar.propTypes = {
    addRecipes: PropTypes.array,
    handlePreparing: PropTypes.func,
    addPreparing: PropTypes.array
  };
export default SideBar;