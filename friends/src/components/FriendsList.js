import React from "react";
import { Link } from "react-router-dom";
// import Friend from "./Friend";
import axiosCreator from "../utils/axiosCreator";

export default function FriendList() {
  const [friendsList, setFriendsList] = React.useState([]);

  React.useEffect(() => {
    axiosCreator()
      .get("/friends")
      .then(res => {
        setFriendsList(res.data);
      })
      .catch(error => {
        console.log(error.response.data);
      });
  }, []);
  return (
    <div>
      FriendList
      {friendsList.map(friend => (
        <div className="purple">
          <Link to={`/friend/${friend.id}`}>
            Friend
            <div>{friend.id}</div>
            <div>{friend.name}</div>
            <div>{friend.age}</div>
            <div>{friend.email}</div>
          </Link>
        </div>
      ))}
    </div>
  );
}
