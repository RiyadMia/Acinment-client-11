import React from "react";
import google from "../../../images/socail/google.png";
import auth from "../../../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./SocailLogin.css";
import Lodeing from "../../Pages/Lodeing/Lodeing";

const SocailLogin = () => {
  /*signInWithGoogle */
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  let erroElement;

  if (loading) {
    return <Lodeing></Lodeing>;
  }

  if (error) {
    erroElement = <p className="text-danger">Error: {error?.message}</p>;
  }
  if (user) {
    navigate("/home");
  }
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="mt-3 px-2">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      {erroElement}
      <div className="d-flex gap">
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-info w-30 mx-auto d-block  gap "
        >
          <img className="google" src={google} alt="" />
          <span className="px-2">
            <small>Google sign in</small>
          </span>
        </button>
      </div>
    </div>
  );
};

export default SocailLogin;
