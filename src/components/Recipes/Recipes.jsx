import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import SideBar from "../SideBar/SideBar";


const Recipes = () => {
    const [recipes,setRecipes]=useState([]);
    useEffect(()=>{
        fetch('./recipe.json')
        .then(res=>res.json())
        .then(data=>setRecipes(data))
       
    },[]);
    console.log(recipes);
    return (
        <div>
           <div className="text-center mt-24 mb-12">
           <h1 className="text-5xl font-semibold mb-6">Our Recipes</h1>
            <p className="max-w-[800px] mx-auto text-[#150B2B99]">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque.  </p>
           </div>
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-7 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {
                        recipes.map(recipe=><Recipe key={recipe.id} recipe={recipe}></Recipe>
                        )
                    }
                {/* <Recipe recipes={recipes}></Recipe>
                <Recipe></Recipe> */}
                </div>
                <div className="col-span-5">
                 <SideBar></SideBar>
                </div>
            </div>
        </div>
    );
};

export default Recipes;