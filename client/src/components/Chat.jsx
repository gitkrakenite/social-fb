import React, { useContext } from "react";
import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";
import { AiOutlineHome, AiOutlineVideoCamera } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { AppContext } from "../context/appContext";

const Chat = () => {
  const { data } = useContext(ChatContext);
  const { setCloseSide, closeSide } = useContext(AppContext);

  return (
    <div className="chat">
      <div
        className="lg:hidden mt-[10px] lg:my-0"
        onClick={() => setCloseSide(false)}
      >
        <AiOutlineMenu className="text-2xl text-white cursor-pointer" />
      </div>

      <div className="chatInfo">
        <span>
          {data?.user?.displayName &&
            "Chatting with " + data?.user?.displayName}
        </span>
        <div className="flex items-center gap-[40px]">
          <a href="https://chirpy-clique-bcb31.web.app" title="Back Home">
            <AiOutlineHome className="text-2xl text-zinc-300" />
          </a>

          <a href="https://meet.google.com/" target="_blank" rel="noreferrer">
            <AiOutlineVideoCamera className="text-2xl text-zinc-300" />
          </a>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
