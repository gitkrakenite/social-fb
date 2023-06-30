import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";

const Login = () => {
  const [err, setErr] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);
      toast.success("successful login");
      navigate("/");
    } catch (err) {
      toast.error("invalid credentials or network error");
      setLoading(false);
    }
  };
  return (
    // formContainer
    <div className="h-[100vh] w-full flex bg-zinc-800 justify-center items-center ">
      {/* formWrapper */}
      <div className=" w-[96%] lg:w-[50%] 2xl:w-[35%] m-auto ">
        <div className="flex flex-col gap-[10px] mb-[2em]">
          <span className="text-zinc-200 text-xl" style={{ fontWeight: 600 }}>
            Hello There. We take your privacy seriously
          </span>
          <span className="text-emerald-700">
            You must enter your email and password to continue
          </span>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-[10px] mb-[20px]">
            <label htmlFor="myEmail" className="text-zinc-400 text-lg">
              Please Enter Your Email
            </label>
            <input
              type="email"
              placeholder="i.e johndoe@gmail.com"
              id="myEmail"
              autocomplete="off"
              required
              className="bg-transparent p-[8px] text-zinc-200 rounded-lg outline-none"
              style={{ border: "1px solid #13855f" }}
            />
          </div>

          <div className=" flex mb-[20px] items-center gap-[20px]">
            <div className=" flex-[0.9] flex flex-col gap-[10px]">
              <label htmlFor="myPass" className="text-zinc-400 text-lg">
                Please Enter Your Password
              </label>
              <input
                type={showPass ? "text" : "password"}
                placeholder="Password"
                autocomplete="off"
                required
                className="bg-transparent p-[8px] text-zinc-200 rounded-lg outline-none"
                style={{ border: "1px solid #13855f" }}
              />
            </div>
            <div className="flex-[0.1] mt-[30px] ">
              {showPass ? (
                <AiOutlineEyeInvisible
                  className="text-2xl text-zinc-200 cursor-pointer"
                  onClick={() => setShowPass(false)}
                />
              ) : (
                <AiOutlineEye
                  className="text-2xl text-zinc-200 cursor-pointer"
                  onClick={() => setShowPass(true)}
                />
              )}
            </div>
          </div>

          {loading ? (
            <div className="text-white my-[10px]">
              <Spinner message="Signing You in" className="" />
            </div>
          ) : (
            <button className="bg-emerald-700 w-full p-[10px] rounded-lg mb-[20px] text-zinc-300 hover:text-zinc-100">
              Proceed To Chat
            </button>
          )}

          {/* {err && <span>Something went wrong</span>} */}
        </form>
        <p className="text-zinc-300">
          You haven't set up chat account ?{" "}
          <Link to="/register" className="text-emerald-600 underline">
            Set Up
          </Link>
        </p>
        <p className="text-zinc-300 mt-[10px]">
          Back To Browse More People ?{" "}
          <a
            href="https://chirpy-clique-bcb31.web.app/"
            className="text-emerald-600 underline"
          >
            Back ?
          </a>
        </p>
        <p className="mt-[10px] text-zinc-300">
          Is there An issue ?{" "}
          <a
            href="mailto:daysseller@gmail.com"
            className="text-emerald-600 underline"
          >
            Mail Admin
          </a>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
