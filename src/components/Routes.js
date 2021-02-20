import { Route, Switch } from "react-router";
import { useSelector } from "react-redux";
// Components
import CategoryTab from "./CategoryTab";
import RecipeTab from "./RecipeTab";
import RecipeForm from "./RecipeForm";
import RecipeDetail from "./recipePage/RecipeDetail";
import HomePage from "./home/HomePage";
import Loading from "./Loading";

const Routes = () => {
  const loading = useSelector((state) => state.category.loading);

  if (loading) return <Loading />;
  return (
    <Switch>
      <Route exact path="/recipes/new">
        <RecipeForm />
      </Route>
      <Route path="/recipes/:recipeSlug">
        <RecipeDetail/>
      </Route>
      <Route path="/recipes">
        <RecipeTab />
      </Route>
      <Route path="/ingredients">
        <CategoryTab />
      </Route>
      <Route exact path="/">
        <HomePage />
      </Route>
    </Switch>
  );
};

export default Routes;
