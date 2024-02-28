<div id="top"></div><br />

- [Basics](#basics)
  - [React element vs component](#react-element-vs-component)
  - [Refs](#refs)
  - [](#)
  - [](#-1)
  - [](#-2)
  - [](#-3)
  - [](#-4)
  - [](#-5)
  - [](#-6)
  - [](#-7)
  - [](#-8)
  - [](#-9)
  - [](#-10)
  - [](#-11)
  - [](#-12)
  - [](#-13)
  - [](#-14)
  - [](#-15)
  - [](#-16)
  - [](#-17)
  - [](#-18)
  - [](#-19)
  - [](#-20)
  - [](#-21)
  - [](#-22)


<br />

# Basics

## React element vs component
- **Element**
  - It is an object representation of a virtual DOM node.
  - It may contain other Elements in its props.
  - React element does not have any methods, making it light and faster to render than components.
  - Syntax:
    ```js
    const ele1 =<h1>Hello, GFG</h1>;
    // OR
    const ele1 = React.createElement('h1', {props}, "Hello, GFG")
    ```
  - Ex:
    ```js
    import React from 'react';
    import ReactDOM from 'react-dom';
    
    // const ele1 = <h1>Welcome</h1>; // or
    const ele1 = React.createElement(
        'h1', { id: 'header' }, 'Welcome'
    );
    ReactDOM.render(ele1, document.getElementById("root")); // Output: Welcome
    ```
    <br />
- **Component**
  - It returns the virtual DOM of the element.
  - A component can be further described into functional components and class components.
  - It is independent and reusable.
  - Syntax:
    ```js
    function name (props){
      return <div>{props.children}<div>
    }
    ```
  - Ex:
    ```js
    import React from 'react';
    import ReactDOM from 'react-dom';
    
    function Welcome(user) {
        return <div>
            <h3>Welcome {user.name}</h3>
        </div>
    }
    const ele = <Welcome name="Friend" />
    ReactDOM.render(ele, document.getElementById("root")); // Output: Welcome Friend
    ```

|Element|Component|
|:----|:----|
|An element is always gets returned by a component.|A component can be functional or a class that optionally takes input and returns an element.|
|The element does not have any methods.|Each component has its life cycle methods.|
|A React element is an object representation of a DOM node.|A component encapsulates a DOM tree.|
|Elements are immutable i,e once created cannot be changed.|The state in a component is mutable.|
|An element can be created using React.createElement( ) with type property.|A component can be declared in different ways like it can be an element class with render() method or can be defined as a function.|
|We cannot use React Hooks with elements as elements are immutable.|React hooks can be used with only functional components|
|Elements are light, stateless and hence it is faster.|It is comparatively slower than elements.|

<br />
<br />

## Refs
- When you want a component to "remember" some information, but you don’t want that information to *trigger new renders*, you can use a ref.
  <br />
- **When to use?**
  - When using third-party libraries.
  - In animations.
  - In managing focus, media playback, and text selection.
  <br />
- **When not to use?**
  - Should not be used with functional components because they don’t have instances.
  - Not to be used on things that can be done declaratively.
  - When using a library or framework that provides its own methods for managing such as Redux or MobX.
- Ex:
  ```js
  // using refs
  import { useRef } from 'react';

  export default function Counter() {
    let ref = useRef(0); // call the useRef Hook and pass the initial value so it will return { current: 0 }

    function handleClick() {
      ref.current = ref.current + 1;
      alert('You clicked ' + ref.current + ' times!');
    }

    return (
      <button onClick={handleClick}>
        Click me!
      </button>
    );
  }

  ```
  ```js
  // callback used inside ref
  class App extends React.Component {
    constructor() {
      super();
      this.state = { sayings: "" };
    }
    update(e) {
      this.setState({ sayings: this.a.value });
    }
    render() {
      return (
        <div>
          Mukul Says{" "}
          <input
            type="text"
            ref={(call_back) => {
                this.a = call_back;
            }}
            onChange={this.update.bind(this)}
          />
          <br />
          <em>{this.state.sayings}</em>
        </div>
      );
    }
  }
  ReactDOM.render(<App />, document.getElementById("root"));
  ```
<br />

|refs|state|
|:----|:----|
|`useRef(initialValue)` returns `{ current: initialValue }`|`useState(initialValue)` returns the current value of a state variable and a state setter function `( [value, setValue])`|
|Doesn’t trigger re-render when you change it.|Triggers re-render when you change it.|
|Mutable—you can modify and update current’s value outside of the rendering process.|"Immutable"—you must use the state setting function to modify state variables to queue a re-render.|
|You shouldn’t read (or write) the current value during rendering.|You can read state at any time. However, each render has its own snapshot of state which does not change.|

<br />
<br />

## 
<br />
<br />

##
<br />
<br />

##
<br />
<br />

##
<br />
<br />

##
<br />
<br />

##
<br />
<br />

##
<br />
<br />

##
<br />
<br />

##
<br />
<br />

##
<br />
<br />

##
<br />
<br />

##
<br />
<br />

##
<br />
<br />

##
<br />
<br />

##
<br />
<br />

##
<br />
<br />

##
<br />
<br />

##
<br />
<br />

##
<br />
<br />

##
<br />
<br />

##
<br />
<br />

##
<br />
<br />

##
<br />
<br />
