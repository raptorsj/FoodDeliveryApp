import React from 'react';
import ReactDOM from 'react-dom/client';
console.log('inside app.js')

const AppLayout = () => {
    return (<div>
        <h1> Applayout component </h1>
    </div>)
}
const value = React.createElement('h1',{id:'header'},'This is heading');
console.log(AppLayout())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(value)
