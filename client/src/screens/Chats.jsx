import { AiOutlineSearch } from "react-icons/ai";

const Chats = () => {
  return (
    <div>
      {/* wrapper */}
      <div className="px-[4em] py-[1.8em] flex gap-[20px]">
        {/* sidebar */}
        <div className=" flex-[0.3] 2xl:flex-[0.2]">
          {/* search form */}
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
        <div className=" flex-[0.7] 2xl:flex-[0.8]">messages</div>
      </div>
      {/*  */}
    </div>
  );
};

export default Chats;
