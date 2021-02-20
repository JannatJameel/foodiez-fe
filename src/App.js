// Components
import Routes from "./components/Routes";
import HomeBar from "./components/home/HomeBar";
import withRoot from "./components/home/withRoot";


function App() {
  return (
    <>
    <HomeBar/>
    <Routes/>
    </>
  );
}

export default withRoot(App);