import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/counter";

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      <Message />
      {/* Functional Components props */}
      <Greet name="Saish" nickName="SJ" />
      {/* <Greet name="Pratik" nickName="PZ" />
      <Greet name="Prafulla" nickName="Papya" /> */}
      {/* Class Component props */}
      <Welcome name="Shivam" nickName="SA">
        {/* <button>Click Me</button> */}
      </Welcome>
      {/* <Hello /> */}
    </div>
  );
}

export default App;
