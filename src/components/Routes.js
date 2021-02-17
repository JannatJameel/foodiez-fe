import { Route, Switch } from "react-router";
import { useSelector } from "react-redux";
// Components 
import CategoryTab from "./CategoryTab";



const Routes = () => {
    const loading = useSelector(state => state.category.loading);

    if(loading) {return <p>Hellooo</p>};
    return (
        <Switch>
            <Route path="/categories">
            <CategoryTab/>
            </Route>
        </Switch>
    );
};

export default Routes;