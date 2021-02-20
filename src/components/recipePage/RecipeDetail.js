// Styling
import withRoot from "../home/withRoot";
// Compoenents 
import HomeBar from "../home/HomeBar";
import RecipeTitle from "./RecipeTitle";
import RecipeIngredients from "./RecipeIngredients"
import RecipeMethod from "./RecipeMethod";


const RecipeDetail = () => {
    return (
        <>
        <HomeBar/>
        <RecipeTitle/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <RecipeIngredients/>
        <RecipeMethod/>
        </>
    );
};

export default withRoot(RecipeDetail);