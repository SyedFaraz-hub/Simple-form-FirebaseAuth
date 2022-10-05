import { React, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import TickModal from "../components/TickModal";
import CrossModal from "../components/CrossModal";

const ResetPassword = () => {
  const [recoveryEmail, setRecoveryemail] = useState("");
  const [modal, setModal] = useState({
    tick: false,
    cross: false,
  });
  const auth = getAuth();
  // let navigate = useNavigate();

  const setPasswordusingEmail = () => {
    sendPasswordResetEmail(auth, recoveryEmail)
      .then(() => {
        console.log("Recovery email sent successfull");
        setModal({
          tick: true,
          cross: false,
        });
      })
      .catch((error) => {
        console.log(error.message);
        setModal({
          tick: false,
          cross: true,
        });
      });
  };

  return (
    <>
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen flex flex-col py-20 items-center">
        {modal.tick ? <TickModal /> : modal.cross ? <CrossModal /> : ""}

        <div className="flex flex-col justify-around bg-white md:w-[25rem] sm:w-[23rem] w-[21rem] rounded-md py-8 px-10 min-h-[100%]">
          <div className="flex justify-center">
            <h1 className="text-3xl font-bold">Reset Password</h1>
          </div>

          <div className="py-6 space-y-6">
            <div className="text-sm space-y-2">
              <p>Email</p>
              <div className="flex items-center border-b-2">
                <div className="absolute ">
                  <AiOutlineUser />
                </div>
                <input
                  className="w-full pl-6 outline-none py-2"
                  type="email"
                  placeholder="Type your username"
                  onChange={(e) => {
                    setRecoveryemail(e.target.value);
                  }}
                />
              </div>
            </div>
            <div>
              <p>You will recieve recovery link on this email</p>
            </div>
            <div>
              <button
                className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full rounded-full py-2 text-sm text-white "
                onClick={setPasswordusingEmail}
              >
                <p>Submit Email for Reset Passoword</p>
              </button>
            </div>
          </div>

          <div className="text-sm flex flex-col items-center space-y-2">
            <p>Go to Log in</p>
            <Link to="/login">LOG IN</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
