import { useRouteError } from "react-router-dom";

const ErrorHandler = () => {
    const error = useRouteError();
    console.log(error);
    return (<div>
        <h1>Error handler invoked if no path matched</h1>
    </div>)
}

export default ErrorHandler;