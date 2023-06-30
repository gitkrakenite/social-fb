import React, { useContext, useState } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { orderBy } from "firebase/firestore";
import { AiOutlineClose } from "react-icons/ai";

const Search = () => {
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState(null);
  const [err, setErr] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const handleSearch = async (searchTerm) => {
    const q = query(collection(db, "users"), orderBy("displayName"));

    try {
      const querySnapshot = await getDocs(q);
      const users = [];
      querySnapshot.forEach((doc) => {
        const userData = doc.data();
        if (
          userData.displayName.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          users.push(userData);
        }
      });
      setUsers(users);
    } catch (err) {
      setErr(true);
      toast.error("An error occurred while searching for users");
    }
  };

  const [hideSearch, setHideSearch] = useState(false);

  const handleInput = (e) => {
    setHideSearch(false);
    const searchTerm = e.target.value.trim();
    if (!searchTerm) {
      return;
    } else {
      handleSearch(searchTerm);
    }
  };

  const handleSelect = async (user) => {
    setHideSearch(true);
    //check whether the group(chats in firestore) exists, if not create
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        //create user chats
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) {}

    // setUser(null);
    setUsername("");
  };

  return (
    <div className="search">
      <div className="searchForm">
        <div className="flex justify-between bg-zinc-700 p-[8px] rounded-md">
          <input type="text" onInput={handleInput} placeholder="Search User" />
          <AiOutlineClose
            className="text-2xl text-white"
            onClick={() => setHideSearch(true)}
          />
        </div>
      </div>
      {/* {!hideSearch && <span>User not found!</span>} */}
      {!hideSearch && (
        <>
          {users?.map((user) => (
            <div
              className="userChat"
              key={user.uid}
              onClick={() => handleSelect(user)}
            >
              <img src={user.photoURL} alt="" />
              <div className="userChatInfo">
                <span>{user.displayName}</span>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Search;
