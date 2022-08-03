import "./App.css";
import FirstComponent from "./components/Greet"; //Default Export
//import Greet from "./components/Greet"; //Named Export

function App() {
  return (
    <div className="App">
      <FirstComponent />
    </div>
  );
}

export default App;
