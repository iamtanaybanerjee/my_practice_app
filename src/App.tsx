import "./App.css";
import Body from "./components/Body";
import MemeItem from "./components/MemeItem";

//STEPS:
//1. Normal load for the 1st time
//2. useEffect --> add scroll event listener funtion (handleScroll)
//3. handleScroll --> check if the end of the page is reached --> if yes --> call the api again
//4. call the api again --> add the new items with the already existing items --> state

function App() {
  return (
    <>
      <Body />
    </>
  );
}

export default App;
