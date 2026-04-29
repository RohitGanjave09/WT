# Activity: Understand State (React)

State is used to store and manage data inside a component.

- State is **mutable (can change)**  
- Used to make UI dynamic  
- Updated using **useState() hook**  

---

## Example 1: Counter

```js
import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0); // state

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increase</button> {/* update state */}
        </div>
    );
}