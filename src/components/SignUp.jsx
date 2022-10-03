import React, { useState } from "react";
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";
import { BsFacebook, BsGoogle, BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

// Firebase
import {signInwithGoogle, signInwithFacebook, signInwithGithub,registerUser} from "../Firebase"

// Redux
import { useDispatch} from "react-redux";
import { Signup } from "../Redux/info/InfoActions";


const SignUp = () => {
  
const [registerEmail , setRegisteremail]= useState("")
const [registerPassword , setRegisterpassword]= useState("")

const dispatch = useDispatch()

const createUser = () => {
  dispatch(Signup(registerEmail, registerPassword))
  registerUser(registerEmail,registerPassword)
}



  return (

    <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 h-screen flex flex-col py-20 items-center">
      <div className="flex flex-col justify-around bg-white md:w-[25rem] sm:w-[23rem] w-[21rem] rounded-md py-8 px-10 min-h-[100%]">
        <div className="flex justify-center" >
          <h1 className="text-3xl font-bold">Sign up</h1>
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
                onChange={(e)=> {setRegisteremail(e.target.value)}}
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
                onChange={(e)=> {setRegisterpassword(e.target.value)}}
              />
            </div>

          </div>

          <div>
            <button className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 w-full rounded-full py-2 text-sm text-white" onClick={createUser}>
              <p>Sign up</p>
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
          <p>Go to Log in</p>
          <Link to="/login">LOGIN IN</Link>
        </div>
      </div>
    </div>


  );
};

export default SignUp;
