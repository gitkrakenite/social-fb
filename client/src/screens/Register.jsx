import { useState } from "react";
import { MdAddPhotoAlternate } from "react-icons/md";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-toastify";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [gender, setGender] = useState("");
  const [profile, setProfile] = useState("");
  const [email, setEmail] = useState("");

  const [showPass, setShowPass] = useState(false);

  const postDetails = (pic) => {};

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password || !gender || !profile || !email) {
      return toast.error("You Have Not Filled All Fields");
    }

    if (password !== cpassword) {
      return toast.error("Passwords Don't Match");
    }
  };

  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      {/* wrapper */}
      <div className=" w-[98%] sm:w-[75%] lg:w-[55%] xl:w-[45%]">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-[10px] mb-[20px]">
            <label htmlFor="username" className="font-bold text-lg">
              Create A Username
            </label>
            <input
              type="text"
              placeholder="i.e smileyfish"
              className="bg-transparent border-2 border-slate-600 rounded-xl p-[8px] outline-none"
              required
              minLength={3}
              id="username"
              maxLength={18}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-[10px] mb-[20px]">
            <label htmlFor="email" className="font-bold text-lg">
              Enter Your Email
            </label>
            <input
              type="email"
              placeholder="your email"
              className="bg-transparent border-2 border-slate-600 rounded-xl p-[8px] outline-none"
              required
              id="email"
              minLength={3}
              maxLength={18}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-[10px] mb-[20px]">
            <label htmlFor="gender" className="font-bold text-lg">
              Gender required
            </label>
            <select
              name="gender"
              id="gender"
              className="bg-transparent border-2 border-slate-600 rounded-xl p-[8px] outline-none"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Choose</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          {/* picture */}
          <div className="flex flex-col gap-[10px] mb-[20px]">
            <label
              htmlFor="profile"
              className="flex items-center gap-[20px] text-lg"
            >
              <MdAddPhotoAlternate className="text-6xl" />
              <span>Please Upload Profile Pic</span>
            </label>
            <input
              type="file"
              className="hidden"
              id="profile"
              accept="image/*"
              onChange={(e) => postDetails(e.target.files[0])}
            />
          </div>
          <div className="flex flex-col gap-[10px] mb-[20px]">
            <label htmlFor="password" className="font-bold text-lg">
              Create A Password
            </label>
            <input
              type={showPass ? "text" : "password"}
              id="password"
              placeholder="i.e pxxxxxxxx"
              className="bg-transparent border-2 border-slate-600 rounded-xl p-[8px] outline-none"
              minLength={3}
              maxLength={18}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center gap-[10px]">
            <div className=" flex-[0.9] flex flex-col gap-[10px] mb-[20px]">
              <label htmlFor="cpassword" className="font-bold text-lg">
                Confirm Your Password
              </label>
              <input
                type={showPass ? "text" : "password"}
                id="cpassword"
                placeholder="i.e pxxxxxxxx"
                className="bg-transparent border-2 border-slate-600 rounded-xl p-[8px] outline-none"
                minLength={3}
                maxLength={18}
                value={cpassword}
                onChange={(e) => setCPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex-[0.1] w-full flex justify-end">
              {showPass ? (
                <AiOutlineEyeInvisible
                  className="text-3xl cursor-pointer hover:text-pink-600"
                  onClick={() => setShowPass(false)}
                />
              ) : (
                <AiOutlineEye
                  className="text-3xl cursor-pointer hover:text-pink-600"
                  onClick={() => setShowPass(true)}
                />
              )}
            </div>
          </div>
          <button
            className="w-full bg-pink-600 p-[9px] rounded-lg text-white"
            onClick={handleSubmit}
          >
            Set Up Account
          </button>
        </form>
        <div className="flex justify-between mt-[8px]">
          <p className="underline">Already Have Account</p>
          <a
            href="mailto:daysseller@gmail.com"
            className="hover:text-pink-600 underline"
          >
            <p>Mail Admin</p>
          </a>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default Register;
