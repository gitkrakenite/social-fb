import { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
const SingleUser = () => {
  const dummyUsers = [
    {
      id: 1,
      username: "janeDoe",
      url: "https://images.pexels.com/photos/163491/bike-mountain-mountain-biking-trail-163491.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 2,
      username: "mercyDoe",

      url: "https://images.pexels.com/photos/910307/pexels-photo-910307.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 3,
      username: "kimmwangi",

      url: "https://images.pexels.com/photos/1147124/pexels-photo-1147124.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 4,
      username: "georgebush",
      url: "https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 5,
      username: "christina",
      url: "https://images.pexels.com/photos/3569601/pexels-photo-3569601.jpeg?auto=compress&cs=tinysrgb&w=1600",
      link: "https://chipyclique-chat.netlify.app",
    },
    {
      id: 6,
      username: "juliusTomg",
      url: "https://images.pexels.com/photos/691034/pexels-photo-691034.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];

  const [scrollPosition, setScrollPosition] = useState(0);

  const handlePrevious = () => {
    const container = document.getElementById("image-container");
    const scrollWidth = container.scrollWidth;
    const visibleWidth = container.offsetWidth;

    setScrollPosition((prevPosition) => prevPosition - visibleWidth);
    container.scrollTo({
      left: scrollPosition - visibleWidth,
      behavior: "smooth",
    });
  };

  const handleNext = () => {
    const container = document.getElementById("image-container");
    const scrollWidth = container.scrollWidth;
    const visibleWidth = container.offsetWidth;

    setScrollPosition((prevPosition) => prevPosition + visibleWidth);
    container.scrollTo({
      left: scrollPosition + visibleWidth,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="px-[3em] pt-[1em]">
        <Link to="/">
          <AiOutlineArrowLeft className="text-2xl" />
        </Link>
      </div>
      {/* wrapper */}
      <div className="w-[80%] m-auto py-[30px]">
        <div className="flex gap-[20px]">
          <div className="flex-[0.5]">
            <img
              src="https://images.pexels.com/photos/1848886/pexels-photo-1848886.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="w-[100%] max-h-[620px] object-contain rounded-lg"
            />
          </div>
          <div className="flex-[0.5]">
            <div className="flex w-full justify-end mb-[15px]">
              <p className="text-pink-600 text-lg">@ mercyDoe</p>
            </div>
            <div className="mb-[15px]">
              <p>
                {" "}
                <span className="font-bold">Bio</span> : I am the fire that
                burns all desires away
              </p>
            </div>
            <div className="mb-[15px]">
              <p>
                {" "}
                <span className="font-bold">Hobbies : </span> swimming, running,
                cleaning
              </p>
            </div>
            <div className="mb-[15px]">
              <p>
                <span className="font-bold">Bio : </span>
                Smart and talented woman, vicious but sweet. Anyway here to make
                new friends
              </p>
            </div>
            <div className="mb-[45px]">
              <span className="font-bold">Career : </span>
              <p>Pursuing a degree in nursing. Ambition is to be a doctor</p>
            </div>
            <div className="w-full flex justify-center">
              <p className="dmBtn">DM mercydoe</p>
            </div>
          </div>
        </div>
      </div>
      {/* recommended */}
      <div className="px-[3em] pt-[1em]">
        <h2 className="text-lg font-bold text-pink-600">Recommended</h2>
        {/*  */}
        <div className="flex flex-col items-center" id="fun">
          <div className="flex items-center justify-between w-full mb-4">
            <button
              className="text-3xl text-gray-600 focus:outline-none"
              onClick={handlePrevious}
              disabled={scrollPosition === 0}
            >
              &lt;
            </button>
            <button
              className="text-3xl text-gray-600 focus:outline-none"
              onClick={handleNext}
              disabled={scrollPosition >= dummyUsers.length * 300} // Assuming each image has a fixed width of 300px
            >
              &gt;
            </button>
          </div>
          <div
            id="image-container"
            className="flex overflow-x-scroll w-full prompt pb-2"
            style={{ scrollBehavior: "smooth" }}
          >
            {dummyUsers.map((image) => (
              <div key={image.id} className="flex-shrink-0 mx-2">
                <Link to={`/user/${image.id}`}>
                  <img
                    src={image.url}
                    alt={image.username}
                    className="w-64 h-64 object-cover rounded-lg"
                  />
                </Link>
                <div className="mt-2">
                  <h2 className="text-md text-pink-600">{image.username}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default SingleUser;
