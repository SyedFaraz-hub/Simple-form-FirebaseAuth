import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {useSelector} from 'react-redux'
import { useDispatch } from "react-redux";
import { setToken} from "../Redux/info/InfoActions";


const Home = () => {
  const state = useSelector(state => state.InfoReducer);
  const auth = getAuth();
  const dispatch = useDispatch();
  let navigate = useNavigate();
 
  const signout = () => {
    signOut(auth)
      .then(() => {
        console.log("user is sign out successfully");
        dispatch(setToken({status: false}));
        navigate("/login");
      })
      .catch((error) => {
        console.log("user is sign out unsuccessfully");
      });
  };


  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen bg-black ">
        <div>
          <p className="text-6xl text-white"> Welcome </p>
        </div>
        <div className="flex flex-col my-7 space-y-2"> 
          <img src={state.user_details.photoURL ? state.user_details.photoURL : "" } alt="" />
          <p className="text-3xl text-white">{`${state.user_details.username ? state.user_details.username : ""}`}</p>
        </div>
        <div>
          <button
            onClick={signout}
            className="text-white p-3 mt-5 rounded-full bg-blue-500 cursor-pointer"
          >
            Signout
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
