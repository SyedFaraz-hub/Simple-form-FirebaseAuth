import { React, useState } from "react";
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";
import { BsFacebook, BsGoogle, BsGithub } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { User_info , setToken} from "../Redux/info/InfoActions";


// Firebase
import {
  signInwithGoogle,
  signInwithFacebook,
  signInwithGithub,
  Login_user,
} from "../Firebase";

import { getAuth, onAuthStateChanged } from "firebase/auth";
// Redux
import { useDispatch } from "react-redux";
import { login} from "../Redux/info/InfoActions";
import CrossModal from "../components/CrossModal";

const Login = () => {
  const [loginEmail, setLoginemail] = useState("");
  const [loginPassword, setLoginpassword] = useState("");
  const [modal, setModal] = useState(false);
  let navigate = useNavigate();
  const auth = getAuth();

  const dispatch = useDispatch();


  //Authorization starts
  const Login = async () => {
    //Redux dispatching
    dispatch(login(loginEmail, loginPassword));
    //Calling Function from firebase file
    await Login_user(loginEmail, loginPassword);

    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(`Login ${user.email}`);
        console.log("user is logged successfully");
        dispatch(setToken({status: true}));
        navigate("/");
      } else {
        dispatch(setToken({status: false}));
        setModal(true);
      }
    });
  };

   const googleAuth =  async () =>{
    const result = await signInwithGoogle();
    if (result.status === "success") {
      dispatch(setToken({status: true}));
      dispatch(User_info( {username: result.username, photoURL:result.photoURL } ));
      navigate("/")
    }
    else{
      dispatch(setToken({status: false}));
    }

   }
   const FacebookAuth =  async () =>{
    const result = await signInwithFacebook();
    if (result.status === "success") {
      dispatch(setToken({status: true}));
      dispatch(User_info({username: result.username, photoURL:result.photoURL}));
      navigate("/")
    }
    else{
      dispatch(setToken({status: false}));
    }
   }
   const GithubAuth =  async () =>{
    const result = await signInwithGithub();
    if (result.status === "success") {
      dispatch(setToken({status: true}));
      dispatch(User_info({username: result.username, photoURL:result.photoURL}));
      navigate("/")
    }
    else{
      dispatch(setToken({status: false}));
    }
   }

   //Authorization ends

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen flex flex-col py-20 items-center">
      {modal ? <CrossModal /> : ""}

      <div className="flex flex-col justify-around bg-white md:w-[25rem] sm:w-[23rem] w-[21rem] rounded-md py-8 px-10 min-h-[100%]">
        <div className="flex justify-center">
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
                onChange={(e) => {
                  setLoginemail(e.target.value);
                }}
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
                onChange={(e) => {
                  setLoginpassword(e.target.value);
                }}
              />
            </div>

            <div className="flex justify-end">
              <Link to="/resetpassword"> Forgot password? </Link>
            </div>
          </div>

          <div>
            <button
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full rounded-full py-2 text-sm text-white "
              onClick={Login}
            >
              <p>Login</p>
            </button>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-sm ">Or Log in using</p>
            <div className="flex space-x-3 py-3 ">
              <span className="cursor-pointer">
                <BsFacebook onClick={FacebookAuth} />
              </span>
              <span className="cursor-pointer">
                <BsGoogle onClick={googleAuth} />
              </span>
              <span className="cursor-pointer">
                <BsGithub onClick={GithubAuth} />
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
  );
};

export default Login;
