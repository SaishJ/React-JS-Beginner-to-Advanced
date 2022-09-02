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

### [Destructuring Props and State](https://github.com/SaishJ/React-JS-Beginner-to-Advanced/commit/502b59a4fd9966d031ebc86cfd56ae66a2dec23f)

> Function Component

```jsx
import React from "react";

const Greet = ({ name, nickName }) => {
  //Destructure prop in function parameter.

  // const { name, nickName } = props;  //Destructure prop in function body.
  return (
    <div>
      <h1>
        Hello {name} a.k.a {nickName}
      </h1>
    </div>
  );
};

export default Greet;
```

> Class Component

```jsx
import React, { Component } from "react";

class Welcome extends Component {
  render() {
    const { name, nickName } = this.props;
    return (
      <div>
        <h1>
          Hello {name} a.k.a {nickName}
        </h1>
        {/* {this.props.children} */}
      </div>
    );
  }
}

export default Welcome;
```

### [Event Handling](https://github.com/SaishJ/React-JS-Beginner-to-Advanced/commit/71a77b9eae9d1a2c624436b31d1b43a13d26fa7c)

> Function Component

```jsx
import React from "react";

function FunctionClick() {
  function clickHandler() {
    console.log("Button click");
  }

  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
}

export default FunctionClick;
```

> Class Component

```jsx
import React, { Component } from "react";

class ClassClick extends Component {
  clickHandler() {
    console.log("Button Clicked...");
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click Me</button>
      </div>
    );
  }
}

export default ClassClick;
```

### [Binding Event Handlers](https://github.com/SaishJ/React-JS-Beginner-to-Advanced/commit/6999a5a35a3c163f62a3918ce5e47ebeb38d02dc#diff-d8e2fd228629da81ebb95e75620e3bff49619c19c32244fdeea37f9b0b365ec7)

### [Methods as Props](https://github.com/SaishJ/React-JS-Beginner-to-Advanced/commit/7b5eae4edfe1a270ade28602721d20eea2405e2d)

### [Conditional Rendering](https://github.com/SaishJ/React-JS-Beginner-to-Advanced/blob/master/src/components/UserGreeting.js)

### [List Rendering](https://github.com/SaishJ/React-JS-Beginner-to-Advanced/commit/d7d48445fa9578b28fb68fc50e5cecbf5d78132d#diff-da356e7f0ec06b582f616a27e404266469bc463344c1378741025425ddf6611c)

### [List and Keys](https://github.com/SaishJ/React-JS-Beginner-to-Advanced/commit/017b8b8f7a3121cb1efbeb6bb87b3712ed1e10a0)

### [Index as key](https://github.com/SaishJ/React-JS-Beginner-to-Advanced/commit/902d326ce3d663f78cdb262180ba933ef9f392a3#diff-85087cfdd57d5bb30b1aac275e7786616c92344ac9c34d6556bf0879bb248287)
