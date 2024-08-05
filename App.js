// BOth comes from node modules
import React from "react";
import ReactDOM from "react-dom/client";

//to create element we use react
    //{}<- used to give attributes to a tag
    //****REMEMBER-> We are creating a React element means it give us a object h1 not html tag*****

//THIRD ARGUMENT IS WHAT WE WANT TO PUT INSIDE A tag
const heading=React.createElement('h1',{id:"head",xyz:"abc"},"Hello from React JS!")
//heading has h1 type object in it 
    //to put this h1 on our browser use ReactDOM by creating a root
    //Root is created

    console.log(heading)//object

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading); //take the object conver it into a tag and put it in root div(DOM)

//CREATE NESTED ELEMETS

/**
 * 
 * <div id="parent">
 *     <div id="child">
 *             <h1>I'm h1 tag</h1>
 *      </div>
 *  </div>
 * 
 * */
//TAKES 3 ARGUMENT REMEMBER
const parent=React.createElement("div",
{id:"parent"},
React.createElement("div",
{id:"child"},
React.createElement("h1",{},"I'm h1 tag")))

console.log(parent)//object
const a = ReactDOM.createRoot(document.getElementById("nesting"))
a.render(parent)

/**
 * 
 * <div id="parent1">
 *     <div id="child1">
 *             <h1>I'm a sibling1/h1>
 *             <h2>I'm a sibling2
 *      </div>
 *  </div>
 * 
 * */
//HOW TO PUT A SIBLING -> we have to create an array of different children
const parent1=React.createElement("div",
{id:"parent1"},
React.createElement("div",
{id:"child1"},
[React.createElement("h1",{},"I'm sibling1 "),React.createElement("h2",{},"I'm sibling2")]))

console.log(parent1)//object
const b = ReactDOM.createRoot(document.getElementById("sibling"))
b.render(parent1)


/*
 <div id="parent2">
 *     <div id="child1">
 *             <h1>I'm a sibling1/h1>
 *             <h2>I'm a sibling2
 *      </div>
 *       <div id="child2">
 *             <h1>I'm a sibling1/h1>
 *             <h2>I'm a sibling2
 *      </div>
 *  </div>
*/

//THIS CODE IS TOO LONG AND UGLY FOR THAT WE HAVE -> JS
const parent2=React.createElement("div",
{id:"parent1"},
[React.createElement("div",
{id:"child1"},
[React.createElement("h1",{},"I'm mess1 "),React.createElement("h2",{},"I'm mess2")])]
)
console.log(parent2)//object
const c = ReactDOM.createRoot(document.getElementById("mess"))
c.render(parent2)