import "./App.css";
import FirstComponent from "./components/Greet"; //Default Export
//import Greet from "./components/Greet"; //Named Export
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <FirstComponent />
      <Welcome />
    </div>
  );
}

export default App;
