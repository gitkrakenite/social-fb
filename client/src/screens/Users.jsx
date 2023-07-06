import Masonry from "react-masonry-css";
import "./masonry.css";
import { useState } from "react";
import {
  AiOutlineMessage,
  AiOutlineSearch,
  AiOutlineUsergroupAdd,
} from "react-icons/ai";
import { FiArrowUpRight } from "react-icons/fi";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";

const Users = () => {
  const breakpointColumnsObj = {
    default: 5,
    3000: 5,
    2300: 5,
    2000: 5,
    1800: 4,
    1400: 3,
    900: 2,
    700: 1,
  };

  const dummyUsers = [
    {
      id: 1,
      username: "Jane Doe",
      profile:
        "https://images.pexels.com/photos/718978/pexels-photo-718978.jpeg?auto=compress&cs=tinysrgb&w=1600",
      caption: "I am the queen of em all",
    },
    {
      id: 2,
      username: "Mercy Doe",
      profile:
        "https://images.pexels.com/photos/1757281/pexels-photo-1757281.jpeg?auto=compress&cs=tinysrgb&w=1600",
      caption: "look at me twice if you dare",
    },
    {
      id: 3,
      username: "John Kim",
      profile:
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1600",
      caption: "look at me twice if you dare",
    },
    {
      id: 4,
      username: "Alex Julian",
      profile:
        "https://images.pexels.com/photos/1405963/pexels-photo-1405963.jpeg?auto=compress&cs=tinysrgb&w=1600",
      caption: "look at me twice if you dare",
    },
    {
      id: 5,
      username: "Chris Lec",
      profile:
        "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=1600",
      caption: "look at me twice if you dare",
    },
    {
      id: 6,
      username: "Miriam Mwangi",
      profile:
        "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1600",
      caption: "look at me twice if you dare",
    },
    {
      id: 7,
      username: "Fellicity Mwangi",
      profile:
        "https://images.pexels.com/photos/1125328/pexels-photo-1125328.jpeg?auto=compress&cs=tinysrgb&w=1600",
      caption: "look at me twice if you dare",
    },
    {
      id: 8,
      username: "Carl Mwangi",
      profile:
        "https://images.pexels.com/photos/2092450/pexels-photo-2092450.jpeg?auto=compress&cs=tinysrgb&w=1600",
      caption: "look at me twice if you dare",
    },
    {
      id: 9,
      username: "nikittah",
      profile:
        "https://images.pexels.com/photos/1972113/pexels-photo-1972113.jpeg?auto=compress&cs=tinysrgb&w=1600",
      caption: "I'm so hot I burn out my wear",
    },
    {
      id: 10,
      username: "kelvoh",
      profile:
        "https://images.pexels.com/photos/936119/pexels-photo-936119.jpeg?auto=compress&cs=tinysrgb&w=1600",
      caption: "bling is my vibe",
    },
    {
      id: 11,
      username: "maxwell",
      profile:
        "https://images.pexels.com/photos/1170974/pexels-photo-1170974.jpeg?auto=compress&cs=tinysrgb&w=1600",
      caption: "bling is my vibe",
    },
    {
      id: 12,
      username: "laprincessa",
      profile:
        "https://images.pexels.com/photos/908310/pexels-photo-908310.jpeg?auto=compress&cs=tinysrgb&w=1600",
      caption: "positive vibes on vibes",
    },
  ];

  //   pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = dummyUsers?.slice(firstIndex, lastIndex);
  const npage = Math.ceil(dummyUsers?.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const [start, setStart] = useState(1);
  const [end, setEnd] = useState(4);

  const handleClick = (number) => {
    setStart(number);
    setEnd(number + 3);
  };

  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      handleClick(currentPage);
    }
  };

  const nextPage = () => {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
      handleClick(currentPage);
    }
  };

  const changeCurrentPage = (id) => {
    setCurrentPage(id);
  };

  // search  states
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setsearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState(null);

  // search user func
  const handleSearchChange = async (e) => {
    e.preventDefault();
    clearTimeout(setsearchTimeout);

    setSearchText(e.target.value);
    // console.log(searchText);

    setsearchTimeout(
      setTimeout(() => {
        const searchResults = dummyUsers?.filter((item) =>
          item.username.toLowerCase().includes(searchText.toLowerCase())
        );

        setSearchedResults(searchResults);
      }, 500)
    );
  };

  const [loading, setLoading] = useState();

  return (
    <div className=" px-[8px] sm:px-[20px] lg:px-[2em] py-[10px]">
      {/* wrapper */}
      <div>
        <div className="flex justify-between my-[8px] items-center">
          <div className="w-full">
            <form className="w-full">
              <div className="flex items-center gap-[20px] w-[90%] md:w-[60%] xl:w-[40%] p-[8px] rounded-lg border-2 border-zinc-400">
                <AiOutlineSearch className="text-3xl" />
                <input
                  type="text"
                  placeholder="search"
                  className="bg-transparent w-full outline-none text-zinc-800"
                  value={searchText}
                  onChange={handleSearchChange}
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
        {/* Displaying data */}
        {loading ? (
          <div>
            <Spinner />
          </div>
        ) : (
          <>
            {searchText ? (
              <>
                <div className="mb-[15px] text-zinc-700">
                  {searchText && (
                    <p style={{ fontWeight: "bold" }}>
                      Results For : {searchText}
                    </p>
                  )}
                  {/* {searchedResults?.length} */}
                </div>

                {searchedResults?.length >= 1 ? (
                  <div>
                    <Masonry
                      breakpointCols={breakpointColumnsObj}
                      className="my-masonry-grid "
                      columnClassName="my-masonry-grid_column"
                    >
                      {/* {alert(records.length)} */}

                      {searchedResults?.map((item) => (
                        <div
                          key={item._id}
                          className="image-container mb-[18px]"
                        >
                          <Link to={`/user/${item.id}`}>
                            <div className="relative rounded-lg group">
                              <div className="overlay absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <div className="bg-gradient-to-b from-transparent to-black opacity-75 w-full h-full rounded-md">
                                  <div className="absolute bottom-[20px] left-[20px]  flex gap-[10%] w-full ">
                                    {/* <p className="text-white text-md ">
                                      {item.username}
                                    </p> */}
                                    <div className="flex gap-[10px]">
                                      <p className="text-white text-md ">
                                        {`${item.caption?.substring(
                                          0,
                                          18
                                        )} ...`}
                                      </p>
                                      <p>
                                        {" "}
                                        <FiArrowUpRight className="text-zinc-500 text-2xl mb-[20px]" />
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <img
                                src={item.profile}
                                alt=""
                                className="w-full rounded-md object-cover"
                              />
                            </div>
                          </Link>
                        </div>
                      ))}
                    </Masonry>
                  </div>
                ) : (
                  <div className="w-full h-[85vh] flex justify-center items-center">
                    <h2 className="text">😥Oops Could not find {searchText}</h2>
                  </div>
                )}
              </>
            ) : (
              <div>
                {records.length >= 1 ? (
                  <>
                    {/* show nav */}
                    {/* nav numbers */}
                    <nav className="flex justify-center ">
                      <ul className="flex gap-[1.2em] sm:gap-[2em]  p-[10px]  items-center bg-zinc-800 my-[10px] rounded-lg">
                        {/* map */}

                        <>
                          <li>
                            <a
                              href="#"
                              onClick={prevPage}
                              className="text-zinc-200"
                            >
                              <p className="text-zinc-200 hover:underline">
                                Prev
                              </p>
                            </a>
                          </li>
                          <li className="flex gap-[15px] sm:gap-[30px] ">
                            {numbers
                              .slice(start - 1, end)
                              .map((item, index) => (
                                <li
                                  key={index}
                                  className={`normal-nav ${
                                    currentPage === item && "active-nav"
                                  }`}
                                >
                                  <a
                                    href="#"
                                    onClick={() => {
                                      handleClick(item);
                                      changeCurrentPage(item);
                                    }}
                                  >
                                    <p className="text-zinc-300 hover:text-zinc-50 ">
                                      {item}
                                    </p>
                                  </a>
                                </li>
                              ))}
                          </li>

                          <li>
                            <a href="#" onClick={nextPage}>
                              <p className="text-zinc-200 hover:underline">
                                Next
                              </p>
                            </a>
                          </li>
                        </>
                      </ul>
                    </nav>
                    {/* show records */}
                    <div>
                      <Masonry
                        breakpointCols={breakpointColumnsObj}
                        className="my-masonry-grid "
                        columnClassName="my-masonry-grid_column"
                      >
                        {/* {alert(records.length)} */}

                        {records?.map((item) => (
                          <div
                            key={item._id}
                            className="image-container mb-[18px]"
                          >
                            <Link to={`/user/${item.id}`}>
                              <div className="relative rounded-lg group">
                                <div className="overlay absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                  <div className="bg-gradient-to-b from-transparent to-black opacity-75 w-full h-full rounded-md">
                                    <div className="absolute bottom-[20px] left-[20px]  flex gap-[10%] w-full ">
                                      {/* <p className="text-white text-md ">
                                      {item.username}
                                    </p> */}
                                      <div className="flex gap-[10px]">
                                        <p className="text-white text-md ">
                                          {`${item.caption?.substring(
                                            0,
                                            18
                                          )} ...`}
                                        </p>
                                        <p>
                                          {" "}
                                          <FiArrowUpRight className="text-zinc-500 text-2xl mb-[20px]" />
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <img
                                  src={item.profile}
                                  alt=""
                                  className="w-full rounded-md object-cover"
                                />
                              </div>
                            </Link>
                          </div>
                        ))}
                      </Masonry>
                    </div>
                  </>
                ) : (
                  <div>
                    <h2>Friends Not Available 😥</h2>
                  </div>
                )}

                {/*  */}
              </div>
            )}
          </>
        )}

        {/*  */}
      </div>
      {/*  */}
    </div>
  );
};

export default Users;
