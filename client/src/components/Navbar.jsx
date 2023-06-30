import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  const handleLogout = () => {
    signOut(auth);
    toast.success("Logged Out Of Chats");
  };

  return (
    <div className="flex text-zinc-200 justify-between items-center p-[10px]">
      <span className=" hidden text-lg xl:block">chirpyclique</span>
      <div className="flex items-center gap-[8px] md:gap-[20px]">
        <img
          src={currentUser?.photoURL}
          alt=""
          className="w-[40px] h-[40px] rounded-full object-cover"
        />
        <span>{currentUser?.displayName}</span>
        <button
          onClick={handleLogout}
          className="bg-emerald-600 p-[5px] rounded-md"
        >
          logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
