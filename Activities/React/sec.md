# Activity: Understand Props (React)

Props (properties) are used to pass data from one component to another.

- Props are **read-only** (cannot be changed)  
- Passed from **parent → child component**  
- Used for dynamic data display  

```js
// Parent Component
function App() {
    return <User name="John" />; // passing prop
}

// Child Component
function User(props) {
    return <h1>{props.name}</h1>; // using prop
}