import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const err = useRouteError();
    console.log(err)
    return (
        <div className="flex justify-center items-center h-[98vh]">
            <div className="text-center">
                <h2 className="text-7xl">{err.status}</h2>
                <p className="font-extrabold">{err.statusText}</p>
            </div>
        </div>
    );
};

export default ErrorPage;