import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      {/* wrapper */}
      <div className=" w-[98%] sm:w-[75%] lg:w-[55%] xl:w-[45%]">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-[10px] mb-[20px]">
            <label htmlFor="username" className="font-bold text-lg">
              Enter You Username
            </label>
            <input
              type="text"
              placeholder="i.e smileyfish"
              className="bg-transparent border-2 border-slate-600 rounded-xl p-[8px] outline-none"
              required
              minLength={3}
              maxLength={18}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-[10px] mb-[20px]">
            <label htmlFor="username" className="font-bold text-lg">
              Enter You Password
            </label>
            <input
              type="text"
              placeholder="i.e pxxxxxxxx"
              className="bg-transparent border-2 border-slate-600 rounded-xl p-[8px] outline-none"
              minLength={3}
              maxLength={18}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            className="w-full bg-pink-600 p-[9px] rounded-lg text-white"
            onClick={handleSubmit}
          >
            Sign In{" "}
          </button>
        </form>
        <div className="flex justify-between mt-[8px]">
          <p className="underline">Are You New Here</p>
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

export default Login;
