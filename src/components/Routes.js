import { Route, Switch } from "react-router";
import { useSelector } from "react-redux";
// Components 
import CategoryTab from "./CategoryTab";
import RecipeTab from "./RecipeTab";


const Routes = () => {
    const loading = useSelector(state => state.category.loading);

    if(loading) {return <p>Hellooo</p>};
    return (
        <Switch>
            <Route path="/categories">
                <CategoryTab/>
            </Route>
            <Route path="/recipes">
                <RecipeTab/>
            </Route>
        </Switch>
    );
};

export default Routes;