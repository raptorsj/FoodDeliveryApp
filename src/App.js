import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Head';
import Body from './components/Body';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import ErrorHandler from './components/Error';

const AppLayoutComponenet = () => {
    return (<div className='app'>
        <Header />
        <Outlet />
    </div>)
}
const appRouter = createBrowserRouter([{
    path:"/",
    element:<AppLayoutComponenet />,
    children:[
        {
            path:"/",
            element:<Body/>
        },
        {
            path:"/about",
            element:<About/>
        }, {
            path:"/contact",
            element:< Contact/>
        }
    ],
    errorElement:<ErrorHandler/>
}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>)