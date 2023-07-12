import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement gives ReactElement(which is JS Object) and it is rendered as HTMLElement

// const heading = React.createElement('h1',{id :"heading"}, "namaste react🚀");
// console.log(heading);

// JSX - HTML like or XML like syntax
// JSX (code is transpiled into regular js code before it is executed into the browser)- it is done by PARCEL - Babel
// Babel - (converts JSX code to react code)
// Babel - Put in next-gen JavaScript --> Get browser-compatible JavaScript out
// JSX => React.createElement => ReactElement- JS Object => HTMLElement(render)
// Attribute in JSX should be in camelCase format
const jsxHeading = (
  <h1 className="heading" tabIndex="1">
    Namastey React using JSX🚀 (react element used inside funtional component)
  </h1>
);
console.log(jsxHeading);

// React components - everything is components in react
// Two types of components in react => 
// 1. class based components
// 2. Funtional components 

// Funtional component

const Title = () => {
    return <h1>Namaste React🙏 (component composition)</h1>
}

const number = 1000;
// component composition
const HeadingComponent = () =>{
   return  <React.Fragment>
   <div id="container-1">
    <h1>Container 1</h1>
    <Title/>
    <Title></Title>
    {Title()}
    { jsxHeading}
    <h2>{number}</h2>
    <h1>Namaste React Functional Component 🚀</h1>
    </div>
    <div id="container-2">
            <h1>Container 2</h1>
    </div>
    </React.Fragment>
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent></HeadingComponent>);
