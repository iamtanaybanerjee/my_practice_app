import "./App.css";
import Body from "./components/Body";
import MemeItem from "./components/MemeItem";

//STEPS:
//1. Create a component for meme item
//2. Create a component for Shimmer UI
//3. Initially render the Shimmer UI items and call the API in the useEffect to show the meme items.
//4. Create a separate reusable hook for the API call

function App() {
  return (
    <>
      <Body />
    </>
  );
}

export default App;
