import { useState } from "react";
// import { Link } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const axiosPublic = useAxiosPublic()

  const handleLogIn = async(e) =>{
    e.preventDefault();
    try {
      const res = await axiosPublic.post('/login', {username, password});
      localStorage.setItem('token', res.data.token)
      alert('Logged in successfully')
    } catch (error) {
      alert('Invalid User')
      alert(error)
    }
  }



  return (
    <>
      <div className="   mt-6">
        <div className="py-4 w-4/5 mt-12 md:mt-20 lg:mt-32 xl:mt-40  md:w-2/5 lg:w-1/3 mx-auto rounded-xl shadow-2xl bg-gray-50">
          <div className="text-center ">
            <h1 className="text-2xl text-blue-800 md:text-4xl font-bold">
              Login now!
            </h1>
            <p className="text-sm">Login to access your account </p>
          </div>
          <form onSubmit={handleLogIn} className="p-10 flex flex-col gap-y-4">
            <div className="">
              <label className="text-lg text-gray-700 pb-[4px]">Name</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                name="name"
                className="w-full py-2 border border-gray-200 outline-green-100 px-4 rounded-sm  "
                required
              />
            </div>
            <div className="">
              <label className="text-lg text-gray-700 pb-[4px]">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                className="w-full py-2 border border-gray-200 outline-green-100 px-4 rounded-sm "
                required
              />
            </div>

            <div className="text-center">
              <input className="bg-blue-600 hover:bg-green-600 transition duration-300 rounded-lg py-2 w-full text-lg font-semibold text-white" type="submit" value="Login" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
