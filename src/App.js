import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EvenBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import PersonList from "./components/PersonList";

function App() {
  return (
    <div className="App">
      <PersonList />
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EvenBind /> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* Functional Components props */}
      {/* <Greet name="Saish" nickName="SJ" /> */}
      {/* <Greet name="Pratik" nickName="PZ" />
      <Greet name="Prafulla" nickName="Papya" /> */}
      {/* Class Component props */}
      {/* <Welcome name="Shivam" nickName="SA"> */}
      {/* <button>Click Me</button> */}
      {/* </Welcome> */}
      {/* <Hello /> */}
    </div>
  );
}

export default App;
