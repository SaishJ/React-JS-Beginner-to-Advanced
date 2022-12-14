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
import NameList from "./components/NameList";
import StyleSheet from "./components/StyleSheet";
import Inline from "./components/Inline";
import Form from "./components/Form";
import LifecycleA from "./components/LifecycleA";
import FragmentsDemo from "./components/FragmentsDemo";
import ParentComp from "./components/ParentComp";
import RefsDemo from "./components/RefsDemo1";
import RefDemo2 from "./components/RefDemo2";
import FocusInput from "./components/FocusInput";
import FRParentInput from "./components/FRParentInput";
import PortalDemo from "./components/PortalDemo";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import Increment from "./components/Increment";
import ClickCounterTwo from "./components/ClickCounterTwo";
import HoverCounterTwo from "./components/HoverCounterTwo";
import { UserProvider } from "./components/useContext";
import ComponentA from "./components/ComponentA";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {
  return (
    <div className="App">
      <PostForm />
      {/* <PostList /> */}
      {/* <UserProvider value="Saish">
        <ComponentA />
      </UserProvider> */}
      {/* <Increment
        render={(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      /> */}
      {/* <Increment
        render={(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      /> */}
      {/* <ClickCounter name="Saish" /> */}
      {/* <HoverCounter name="Pratik" /> */}
      {/* <ErrorBoundary>
        <Hero heroName="Superman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary> */}
      {/* <PortalDemo /> */}
      {/* <FRParentInput /> */}
      {/* <FocusInput /> */}
      {/* <RefsDemo /> */}
      {/* <RefDemo2 /> */}
      {/* <ParentComp /> */}
      {/* <FragmentsDemo /> */}
      {/* <LifecycleA /> */}
      {/* <Form /> */}
      {/* <StyleSheet primary={true} /> */}
      {/* <Inline /> */}
      {/* <NameList /> */}
      {/* <PersonList /> */}
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
