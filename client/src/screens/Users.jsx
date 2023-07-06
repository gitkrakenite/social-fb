import Masonry from "react-masonry-css";
import "./masonry.css";
import { useState } from "react";
import {
  AiOutlineMessage,
  AiOutlineSearch,
  AiOutlineUsergroupAdd,
} from "react-icons/ai";

const Users = () => {
  const breakpointColumnsObj = {
    default: 5,
    3000: 5,
    2300: 5,
    2000: 4,
    1000: 3,
    900: 2,
    500: 1,
  };

  const dummyUsers = [
    {
      id: 1,
      username: "Jane Doe",
      profile:
        "https://images.pexels.com/photos/718978/pexels-photo-718978.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 2,
      username: "Mercy Doe",
      profile:
        "https://images.pexels.com/photos/1757281/pexels-photo-1757281.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 3,
      username: "John Kim",
      profile:
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 4,
      username: "Alex Julian",
      profile:
        "https://images.pexels.com/photos/1405963/pexels-photo-1405963.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 5,
      username: "Chris Lec",
      profile:
        "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 6,
      username: "Miriam Mwangi",
      profile:
        "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 7,
      username: "Fellicity Mwangi",
      profile:
        "https://images.pexels.com/photos/1125328/pexels-photo-1125328.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 8,
      username: "Carl Mwangi",
      profile:
        "https://images.pexels.com/photos/2092450/pexels-photo-2092450.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];

  return (
    <div className=" px-[8px] sm:px-[20px] lg:px-[2em] py-[10px]">
      {/* wrapper */}
      <div>
        <div className="flex justify-between my-[8px]">
          <div className=" w-full">
            <form className="w-full">
              <div className="flex items-center gap-[20px] w-[90%] md:w-[60%] xl:w-[40%] p-[8px] rounded-lg border-2 border-zinc-400">
                <AiOutlineSearch className="text-3xl" />
                <input
                  type="text"
                  placeholder="search"
                  className="bg-transparent w-full outline-none text-zinc-800"
                />
              </div>
            </form>
          </div>
          <div className="flex items-center gap-[14px] sm:gap-[34px]">
            <AiOutlineMessage className="text-4xl" />
            <AiOutlineUsergroupAdd className="text-4xl" />
            <img
              src="https://images.pexels.com/photos/2092450/pexels-photo-2092450.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="w-[50px] h-[50px] rounded-full object-cover"
            />
          </div>
        </div>
        {/* masonry layout */}
        <div>
          {/*  */}
          <div>
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid "
              columnClassName="my-masonry-grid_column"
            >
              {/* {alert(records.length)} */}

              {dummyUsers?.map((item) => (
                <div key={item._id} className="image-container mb-[18px]">
                  <div className="relative rounded-lg group">
                    <div className="overlay absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="bg-gradient-to-b from-transparent to-black opacity-75 w-full h-full rounded-md">
                        <p className="text-white text-lg absolute bottom-[20px] left-[20px]">
                          {item.username}
                        </p>
                      </div>
                    </div>

                    <img
                      src={item.profile}
                      alt=""
                      className="w-full rounded-md object-cover"
                    />
                  </div>
                </div>
              ))}
            </Masonry>
          </div>
          {/*  */}
        </div>
        {/*  */}
      </div>
      {/*  */}
    </div>
  );
};

export default Users;
