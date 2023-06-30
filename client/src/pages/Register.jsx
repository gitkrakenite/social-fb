import React, { useState } from "react";
import Add from "../img/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Spinner from "../components/Spinner";
import { toast } from "react-toastify";

const Register = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      setLoading(true);
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});

            // send data to mongodb
            setLoading(false);
            navigate("/");
          } catch (err) {
            console.log(err);
            toast.error("Could not set Up Your Account. Contact Admin");
            setLoading(false);
          }
        });
      });
    } catch (err) {
      toast.error("Network Error");
      setLoading(false);
    }
  };

  return (
    <div className="h-[100vh] overflow-y-scroll prompt w-full flex bg-zinc-800 justify-center items-center ">
      <div className=" w-[96%] lg:w-[50%] 2xl:w-[35%] m-auto ">
        <div className="flex flex-col gap-[10px] mb-[1em]">
          <span className="text-zinc-200 text-2xl" style={{ fontWeight: 600 }}>
            Please Create An Account
          </span>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-[10px] mb-[20px]">
            <label htmlFor="username" className="text-zinc-400 text-lg">
              Create A Username
            </label>
            <input
              required
              type="text"
              placeholder="i.e freakydoughnut"
              id="username"
              className="bg-transparent p-[8px] text-zinc-200 rounded-lg outline-none"
              style={{ border: "1px solid #13855f" }}
            />
          </div>

          <div className="flex flex-col gap-[10px] mb-[20px]">
            <label htmlFor="myEmail" className="text-zinc-400 text-lg">
              Please Enter Your Email
            </label>
            <input
              required
              type="email"
              placeholder="i.e janedoe@gmail.com"
              id="myEmail"
              className="bg-transparent p-[8px] text-zinc-200 rounded-lg outline-none"
              style={{ border: "1px solid #13855f" }}
            />
          </div>

          <div className=" flex mb-[20px] items-center gap-[20px]">
            <div className=" flex-[0.9] flex flex-col gap-[10px]">
              <label htmlFor="myPassword" className="text-zinc-400 text-lg">
                Create A Password
              </label>
              <input
                required
                type={showPass ? "text" : "password"}
                placeholder="Your Password"
                id="myPassword"
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

          <div className="mb-[20px] flex">
            <input required style={{ display: "none" }} type="file" id="file" />
            <label htmlFor="file" className="flex items-center gap-[20px]">
              <img src={Add} alt="" />
              <div className="flex flex-col gap-[5px]">
                <span className="text-zinc-200 text-sm">
                  Choose chat profile pic
                </span>
                <span className="text-zinc-200 text-sm">
                  Then Click Set Up Account
                </span>
              </div>
            </label>
          </div>

          <div className="w-full">
            {loading ? (
              <div className="text-white my-[10px]">
                <Spinner message="setting up chat account" className="" />
              </div>
            ) : (
              <button
                disabled={loading}
                className="bg-emerald-700 w-full p-[10px] rounded-lg mb-[20px] text-zinc-300 hover:text-zinc-100"
              >
                Set Up Account
              </button>
            )}
          </div>

          {loading && (
            <Spinner message="Uploading and Compressing Profile. Please Wait .." />
          )}

          {/* {loading && "Uploading and compressing the image please wait..."} */}

          {err && (
            <span className="text-zinc-300">
              Something went wrong{" "}
              <a
                href="mailto:daysseller@gmail.com"
                className="text-zinc-50 underline"
              >
                Mail Admin
              </a>{" "}
            </span>
          )}
        </form>

        <p className="text-zinc-300">
          Already Have A Chat account ?{" "}
          <Link to="/login" className="text-emerald-600 underline">
            click here
          </Link>
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

export default Register;
