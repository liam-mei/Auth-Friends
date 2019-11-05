import React from "react";
import { Link } from "react-router-dom";
// import Friend from "./Friend";
// import axiosCreator from "../utils/axiosCreator";

export default function FriendList(props) {

  console.log("list props", props)
  return (
    <div>
      FriendList
      {props.friendsList.map(friend => (
        <div className="purple" key={friend.id}>
          <Link to={`/friends/${friend.id}`}>
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
