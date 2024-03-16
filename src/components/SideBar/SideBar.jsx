import Tr from "../Tr/Tr";
import PTr from "../PTr/PTr";
// import { totalTime } from "../Recipes/Recipes";


const SideBar = ({addRecipes,handlePreparing,addPreparing}) => {
    console.log(addPreparing);
    const totalTime=addPreparing.reduce((p,c)=>p+parseInt(c.preparing_time),0)
    const totalCalories=addPreparing.reduce((p,c)=>p+parseInt(c.calories),0)
    console.log(totalTime);
    return (
        <div className="border-2 ml-6 rounded-xl">
            <div>
                <h1 className="text-2xl mt-6 mb-4 font-semibold text-center">Want to cook: {addRecipes.length}</h1>
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
                    {/* row 1 */}
                    {/* <tr className="bg-[#28282808]"> */}
                        {/* <th>1</th>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>Blue</td> */}
                    
                        {/* <td><button onClick={()=>handleCook()} className="btn bg-[#0BE58A] text-lg font-semibold rounded-full border-0" >Preparing</button></td> */}
                    {/* </tr> */}
                    </tbody>
                </table>
                </div>
                <div className="flex justify-end gap-3 text-lg font-semibold my-4 mr-4 text-[#282828CC]">
                    <p>Total Time =<br /> <span>{totalTime} minutes</span></p>
                    <p>Total Calories =<br /> <span> {totalCalories} calories</span></p>
                </div>
            </div>
        </div>
    );
};

export default SideBar;