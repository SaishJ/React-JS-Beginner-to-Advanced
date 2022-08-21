# React JS Beginner to Advanced

### Create React App
```bash
  npx create-react-app react-app
  cd react-app
  npm start
```

### [Functional Components](https://github.com/SaishJ/React-JS-Beginner-to-Advanced/tree/967f06ec783f29c6cf5dac70a6d4205a0acd537c/src/components)
```jsx
  import React from "react";

  const Greet = () => {
    return <h1>Hello React</h1>;
  };

  export default Greet;
```

### [Class Components](https://github.com/SaishJ/React-JS-Beginner-to-Advanced/tree/75de59bc80822bb37c23b7aa597a814394a1ec1c/src/components)
```jsx
  import React, { Component } from "react";

  class Welcome extends Component {
    render() {
      return <h1>Hello JS</h1>;
    }
  }

  export default Welcome;
```

### [JSX (JavaScript XML)](https://github.com/SaishJ/React-JS-Beginner-to-Advanced/tree/0048fef8c66089b7059f06fdeb3dd03ceb706a42/src)
```jsx
  import React from "react";

  const Hello = () => {
    return (
      <div className="dummyClass">
        <h1>Hello JSX</h1>
      </div>
    );
  };
```

### [Props](https://github.com/SaishJ/React-JS-Beginner-to-Advanced/tree/e05e7572b0109219728ec3ba80a4536d178758dd/src)
```jsx
  import React from "react";

  const Greet = (props) => {
    console.log(props);
    return (
      <div>
        <h1>
          Hello {props.name} a.k.a {props.nickName}
        </h1>
      </div>
    );
  };

  export default Greet;
```

### [State](https://github.com/SaishJ/React-JS-Beginner-to-Advanced/tree/7ae573ec1a58e3298ed81145ba1dfc1ba30f11e4/src/components)
```jsx
  import React, { Component } from "react";

  class Message extends Component {
    constructor() {
      super();
        this.state = {
          Message: "Welcome",
        };
    }

    changeMessage() {
      this.setState({
        Message: "Hii",
      });
    }

    render() {
      return (
        <div>
          <h1>{this.state.Message}</h1>
          <button onClick={() => this.changeMessage()}>Click Me</button>
        </div>
      );
    }
  }

  export default Message;
```
