# Activity: Understand Hooks (React)

Hooks are functions that let you use state and other React features in functional components.

- Used only in functional components  
- Start with `use` (e.g. useState, useEffect)  
- Helps manage state and lifecycle  

Common hooks:

- **useState** → manage state  
- **useEffect** → handle side effects (API, lifecycle)  

---

## Example 1: useState

```js
import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0); // state hook

    return (
        <button onClick={() => setCount(count + 1)}>
            {count} {/* display state */}
        </button>
    );
}



import { useEffect } from "react";

function App() {

    useEffect(() => {
        console.log("Component Mounted"); // runs once
    }, []);

    return <h1>Hello</h1>;
}