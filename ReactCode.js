import React from "react"
import ReactDOM from "react-dom/client"

//React Elements are Object and when we render our element it becomes an html element (render) 
// JSX => Babel transpile  it to React.createElement => ReactElement-JS Object => HTMLElement (render)
//JSX - HTML-like or XML-like syntax
 
//() <= FOR MULTILINE
const jsxheading = (<h1 id="heading1">heading written by jsx</h1>);
//JSX(transpiled before it reaches  the JS) - by PARCEL - by Babel
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(jsxheading)

// *****React Component *****
//React Functional Component - Just A normal js returning JSX
const HeadingComponent = () => (
    <div id="container">
      <h1 id="heading2">heading written by Functional Component</h1>
    </div>
);

//same code
// const HeadingComponent = () =>{ 
//     return <h1 id="heading2">"heading written by Functional Component"</h1>
// };
// root.render(HeadingComponent)  ***WRONG REMEMBER***
root.render(< HeadingComponent />)


//Writting 2 components together  ---> This is component Composition --> Component inside component
const Title = () => (<h1 id="heading1">heading written by Title Component</h1>);

const HeadingComponent2 = function() {
    return(<div id="container">
        {/* 3 ways */}
        {Title()}
        <Title></Title>
        < Title />
      <h1 id="heading3">heading written by Functional Component</h1>
    </div>)
};
root.render(< HeadingComponent2 />)

//JS inside React Component
const number= 10000
const HeadingComponent3 = function() {
    return(<div id="container">
        {number}
        {/* <h1>{console.log("Js inside React Component")}</h1> */}
      <h1 id="heading3">heading written by Functional Component</h1>
    </div>)
};
root.render(< HeadingComponent3 />)

// Recat Element Inside React Component
const elem = <span>React Element --</span>
const ReactElement =  (
    <h1 id="heading1">
    {elem}
    heading written by React Element
    </h1>
);

const HeadingComponent4 = function() {
    return(<div id="container">
        {ReactElement}
      <h1 id="heading3">heading written by Functional Component</h1>
    </div>)
};
root.render(< HeadingComponent4 />)


// Similarly we can put React component inside react Element