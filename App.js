import React from 'react';
import ReactDOM from 'react-dom/client';
console.log('inside app.js')

const AppLayout = () => {
    return (<div>
        <h2>Applayout component from React</h2>
    </div>)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>)
