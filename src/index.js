//1 import react andf reactDom library
import React from "react";
import ReactDOM from "react-dom/client";

//2 Get a reference to the div with ID root
const el = document.getElementById('root');

//3 Tell React to make control os that element
const root = ReactDOM.createRoot(el);
//4 Creat a component

function App() {
    return <input style={{ textDecoration: 'none', paddingTop: '200px', border: '1px solid blue' }} />
}
//5 Show the component on the screen

root.render(<App />);

