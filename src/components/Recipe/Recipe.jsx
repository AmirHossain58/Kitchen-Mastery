import { CiStopwatch } from "react-icons/ci";
import { AiOutlineFire } from "react-icons/ai";

const   Recipe = ({recipe}) => {
    const{ calories,recipe_image,recipe_name, short_description,preparing_time,ingredients }=recipe
    console.log(recipe);
    const ingredientSlice=ingredients.slice(0,5)
    return (
        <div>
            <div className="card border-2 p-6 bg-base-100 shadow-xl">
            <figure><img className="w-[330px] rounded-2xl h-[250px]" src={recipe_image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{recipe_name}</h2>
                <p className="text-[#878787]">{short_description}</p>
                 <hr />
                <h4 className="text-lg font-medium">Ingredients:{ingredients.length}</h4>
                <ul className="list-disc text-[#878787]">
                    {
                       
                        ingredientSlice.map((i,idx)=><li key={idx}>{i}</li>)
                    }
                </ul>
                <hr />
                <div className="flex text-[#282828CC] text-lg font-medium my-4">
                    <p className="flex items-center gap-2"> <CiStopwatch /> {preparing_time} minutes</p>
                    <p className="flex items-center gap-2"><AiOutlineFire /> {calories} calories</p>
                </div>
                <div className="card-actions ">
                <button className="btn bg-[#0BE58A] text-xl font-bold rounded-full border-0">Want to Cook</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Recipe;