import React from 'react';
import { createRoot } from 'react-dom/client';


const App = () => <h1>Hello from React!</h1>;

const root = createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(<App />);
/*
const Welcome = () => {
    return (
        <div className="container">
            <h1>Yu wazz-upp mga ka geng-geng</h1>
        </div>
    )
}

document.addEventListener('DOMContentLoaded',()=>{
    ReactDom.render(<Welcome/>,document.getElementById('welcome'))
})

export default Welcome;
*/