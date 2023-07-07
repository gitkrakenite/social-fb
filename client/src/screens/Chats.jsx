import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import "./chats.css";

const Chats = () => {
  const [inputValue, setInputValue] = useState("");
  const [isPickerOpen, setIsPickerOpen] = useState(false);

  const handleEmojiSelect = (emoji) => {
    setInputValue((prevValue) => prevValue + emoji.native);
  };

  return (
    <div>
      {/* wrapper */}
      <div className="px-[4em] py-[1.8em] flex gap-[20px]">
        {/* sidebar */}
        <div className=" flex-[0.3] 2xl:flex-[0.2]">
          {/* search form */}
          <Link to="/">
            <AiOutlineArrowLeft className="text-2xl mb-[20px]" title="home" />
          </Link>
          <form className="flex gap-[10px] items-center mb-[25px] bg-zinc-200 p-[8px] rounded-lg">
            <AiOutlineSearch className="text-xl" />
            <input
              type="text"
              placeholder="search"
              className="w-full bg-transparent outline-none"
            />
          </form>
          {/* search results */}
          <div className="bg-zinc-800 text-zinc-200 p-[10px] rounded-md max-h-[20vh] overflow-y-scroll prompt">
            <p className="mb-2 cursor-pointer">julian</p>
            <p className="mb-2 cursor-pointer">chris</p>
            <p className="mb-2 cursor-pointer">george</p>
          </div>
          {/* other chats */}
          <div className="mt-[1em]">
            <h2 className="font-bold my-[20px]">All Your Chats</h2>
            <ul className="flex flex-col gap-[10px]">
              <li className="cursor-pointer">mercydoe</li>
              <li className="cursor-pointer">gregory</li>
              <li className="cursor-pointer">kingjulian</li>
              <li className="cursor-pointer">markfufu</li>
              <li className="cursor-pointer">ruanjuju</li>
            </ul>
          </div>
        </div>
        {/* messages */}
        <div className=" flex-[0.7] 2xl:flex-[0.8] bg-zinc-200  rounded-lg">
          {/* wrapper */}
          <div className="h-[90vh]">
            {/* topbar */}
            <div className="bg-zinc-500 h-[8vh] flex w-full items-center">
              <p className="pl-[10px] text-lg text-zinc-200">
                Chatting With mercydoe
              </p>
            </div>
            {/* chats */}
            <div className="h-[78vh] overflow-x-scroll prompt bg-zinc-200">
              <div className="flex justify-start w-full pl-[10px] py-[10px]">
                <div>
                  <p className="receivedMessages">Hello from mercy</p>
                  <span className="text-sm font-bold">2 mins Ago</span>
                </div>
              </div>
              <div className="w-full flex justify-end pr-[10px]">
                <div>
                  <p className="myMessage">Hello mercy I am John</p>
                  <span className="text-sm font-bold">1 min Ago</span>
                </div>
              </div>
            </div>
            {/* send form */}
            <div className="h-[4vh]">
              <div className="w-full h-full flex items-center gap-[10px] bg-slate-100 p-[5px]">
                <div>
                  <button
                    className="p-2 rounded-full bg-gray-800 hover:bg-gray-600 focus:outline-none"
                    onClick={() => setIsPickerOpen(!isPickerOpen)}
                  >
                    😊
                  </button>
                </div>
                <form className="w-full h-full">
                  <input
                    type="text"
                    placeholder="Enter Message"
                    className="w-full h-full p-[8px] outline-none bg-transparent"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                </form>

                {isPickerOpen && (
                  <div className="absolute z-10 bottom-0 right-0">
                    <Picker data={data} onEmojiSelect={handleEmojiSelect} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default Chats;
