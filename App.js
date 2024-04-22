import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Head';
import Body from './components/Body';

const AppLayoutComponenet = () => {
    return (<div className='app'>
        <Header />
        <Body />
    </div>)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayoutComponenet />)