\*\*\*Virtual DOM:
React create a copy of the real DOM means virtual DOM
When data changes react update the virtual DOM, updates only change part in real DOM
Used for high performance

How to create project in React:

1. Install nodejs
2. npm create vite@latest my-app

Activity:

1. Diff bet react and angular
2. market hype of react and angular
3. Why react is created
4. what is compenets ,types , where we use compenents in react with two examples
5. what is props, why we use, types with two examples

vite: it is a fast build tool
npm install: install dependencies
npm run dev: start server

\*\*JSX: It means JavaScript + XML ,it allow to write html code inside JS
eg-
const element = <h1>Hello React</h1>;
rules -
-must return single parent
-use scope bracket for

\*\*main.jsx: Entry point of the application

\*\*\*Compenents:
It is a heart of react
eg.- Functional component
function Student(){
return <h1>This is functional component</h1>
}
use component- function APP(){
return <><student/></>  
 }

\*prop: data passing from parent to child
function Student(props){
return <h2>name: {props.name}</h2>
}
use component- function APP(){
return <Student name = "Tahir"/>  
 }

\*State:
It means value changes over time when state changes ui update automatically

\*\*\*React Router:
npm install react-router-dom
