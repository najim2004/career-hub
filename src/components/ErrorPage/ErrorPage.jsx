import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center  h-screen">
            <h2 className="text-6xl mb-5">Oops!</h2>
            <p>Click <Link to={-1} className="text-lg font-semibold text-red-500">Back</Link> to go previous page!</p>
        </div>
    );
};

export default ErrorPage;