# Activity: Types of Components (React)

Components are reusable parts of UI.

Main types:

- **Functional Component** → Simple function, uses hooks  
- **Class Component** → Uses class, has lifecycle methods  

Other types:

- **Pure Component** → Prevents unnecessary re-render  
- **HOC (Higher Order Component)** → Enhances another component  
- **Controlled Component** → Form data handled by React state  
- **Uncontrolled Component** → Form data handled by DOM  
- **Presentational Component** → UI only  
- **Container Component** → Logic + data handling  

```js
// Functional Component
function App() {
    return <h1>Hello</h1>; // simple UI
}