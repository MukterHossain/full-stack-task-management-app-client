import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div>
            <div className="flex justify-center items-center relative">
                <img className="w-lg" src="https://i.ibb.co.com/7G91cmr/Error.jpg" alt="" />
                <Link to={'/'} className="absolute bottom-0 mx-auto"><button className=" text-center font-semibold hover:bg-green-800 bg-violet-700 text-white rounded-md px-3 outline-none transition duration-300  py-2 ">Go Home</button></Link>
            </div>
        </div>
    );
};

export default Error;