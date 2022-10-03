import { React, useState } from "react";
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";
import { BsFacebook, BsGoogle, BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";


// Firebase
import {signInwithGoogle, signInwithFacebook, signInwithGithub,Login_user} from "../Firebase"

// Redux
import { useDispatch} from "react-redux";
import { login } from "../Redux/info/InfoActions";

const Login = () => {

  const [loginEmail, setLoginemail] = useState("");
  const [loginPassword, setLoginpassword] = useState("");

  const dispatch = useDispatch()

  const Login = () => {
    dispatch(login(loginEmail, loginPassword))
    Login_user(loginEmail,loginPassword)
  }


  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen flex flex-col py-20 items-center">
      <div className="flex flex-col justify-around bg-white md:w-[25rem] sm:w-[23rem] w-[21rem] rounded-md py-8 px-10 min-h-[100%]">
        <div className="flex justify-center" >
          <h1 className="text-3xl font-bold">Log in</h1>
        </div>

        <div className="py-6 space-y-6">
          <div className="text-sm space-y-2">
            <p>Email</p>
            <div className="flex items-center border-b-2">
              <div className="absolute">
                <AiOutlineUser />
              </div>
              <input
                className="w-full pl-6 outline-none py-2"
                type="email"
                placeholder="Type your username"
                onChange={(e)=> {setLoginemail(e.target.value)}}
              />
            </div>
          </div>
          <div className="text-sm space-y-2">
            <p>Password</p>
            <div className="flex items-center border-b-2">
              <div className="absolute">
                <AiOutlineLock />
              </div>
              <input
                className="w-full pl-6 outline-none py-2"
                type="password"
                placeholder="Type your username"
                onChange={(e)=> {setLoginpassword(e.target.value)}}
              />
            </div>

            <div className="flex justify-end">
              <Link to="/signup"> Forgot password? </Link>
            </div>
          </div>

          <div>
            <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full rounded-full py-2 text-sm text-white " onClick={Login}>
              <p>Login</p>
            </button>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-sm ">Or Log in using</p>
            <div className="flex space-x-3 py-3 ">
              <span className="cursor-pointer">
                <BsFacebook onClick={signInwithFacebook}/>
              </span>
              <span className="cursor-pointer">
                <BsGoogle onClick={signInwithGoogle}/>
              </span>
              <span className="cursor-pointer">
                <BsGithub onClick={signInwithGithub}/>
              </span>
            </div>
          </div>

         
        </div>

        <div className="text-sm flex flex-col items-center space-y-2">
          <p>Sign up using Email</p>
          <Link to="/signup">SIGN UP</Link>
        </div>
      </div>
    </div>

    // <div className="bg-gradient-to-r from-pink-500  via-purple-500 to-indigo-500 h-screen">
    //   <div className="flex flex-col justify-center items-center h-screen space-y-10">
    //     <div className="md:text-4xl text-3xl font-bold">Join us, Log-in</div>

    //     <div className="text-2xl space-y-4">
    //       <div className="space-y-2">
    //         <h1>Email</h1>
    //         <input
    //           className="p-2 rounded-sm"
    //           type="text"
    //           placeholder="Enter Your Email "
    //           onChange={(e)=> {setLoginemail(e.target.value)}}
    //         />
    //       </div>
    //       <div className="space-y-2">
    //         <h1>Password</h1>
    //         <input
    //           className="p-2 rounded-sm"
    //           type="text"
    //           placeholder="Enter Your Password "
    //           onChange={(e)=> {setLoginpassword(e.target.value)}}
    //         />
    //       </div>

    //       <div>
    //       <Link to={toggle ? `/` : `/`}>
    //         <button onClick={Login_user} className="bg-purple-300 w-full py-3 font-semibold text-xl">Log in</button>
    //       </Link>
    //       </div>
    //     </div>

    //    <h1>Go to <Link to="/" className="cursor-pointer font-semibold"> Sign up  </Link></h1>
    //   </div>
    // </div>
  );
};

export default Login;
