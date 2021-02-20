// Styling
import withRoot from "./withRoot";
// Components 
import Welcome from "./Welcome"
import Instructions from "./Instructions";
import RecentRecipes from "./RecentRecipes";


const HomePage = () => {
    return (
        <div>
            <Welcome/>
            <Instructions/>
            {/* <RecentRecipes/> */}
        </div>
        
    )
};

export default withRoot(HomePage);