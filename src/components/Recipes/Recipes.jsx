import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import SideBar from "../SideBar/SideBar";

export let totalTime;
const Recipes = () => {
    const [recipes,setRecipes]=useState([]);
    const [addRecipes,setAddRecipes]=useState([]);
    const [addPreparing,setAddPreparing]=useState([]);
    totalTime=addPreparing.reduce((p,c)=>p+c.preparing_time,0)
    useEffect(()=>{
        fetch('./recipe.json')
        .then(res=>res.json())
        .then(data=>setRecipes(data))
       
    },[]);
  const handleCook=(recipe)=>{
    console.log(recipe);
    const isExists=addRecipes.find(item=>item.recipe_id
        ===recipe.recipe_id
        )
    if(!isExists){
        setAddRecipes([...addRecipes,recipe])
    }else{
        alert('alllllll')
    }
   
  }
  const handlePreparing=(r)=>{
    const remove=addRecipes.filter(item=>item.recipe_id!==r.recipe_id)
    setAddRecipes(remove)
    setAddPreparing([...addPreparing,r])
        }
    return (
        <div>
           <div className="text-center mt-24 mb-12">
           <h1 className="text-5xl font-semibold mb-6">Our Recipes</h1>
            <p className="max-w-[800px] mx-auto text-[#150B2B99]">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque.  </p>
           </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                <div className="col-span-7 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {
                        recipes.map(recipe=><Recipe 
                            key={recipe.id} 
                            recipe={recipe}
                            handleCook={handleCook}
                            
                            ></Recipe>
                        )
                    }
                </div>
                <div className="col-span-5">
                 <SideBar 
                 addRecipes={addRecipes}
                 addPreparing={addPreparing}
                 handlePreparing={handlePreparing}
                 ></SideBar>
                </div>
            </div>
        </div>
    );
};

export default Recipes;