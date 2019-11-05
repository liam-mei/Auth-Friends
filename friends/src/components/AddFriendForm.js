import React from "react";
import axiosCreator from "../utils/axiosCreator";
import { Redirect } from "react-router-dom";

export default function AddFriendForm(props) {
  const [friend, setFriend] = React.useState({
    name: "Derrick",
    age: "32",
    email: "asdf@asdf.com"
  });

  const handleChange = e => {
    setFriend({
      ...friend,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosCreator()
      .post("/friends", friend)
      .then(res => {
        props.setFriendsList(res.data);
        return <Redirect to="/friendslist" />;
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      Add AddFriendForm asdfasdf
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="name"
          type="text"
          value={friend.name}
          placeholder="name"
        />
        <input
          onChange={handleChange}
          name="age"
          type="number"
          value={friend.age}
          placeholder="age"
        />
        <input
          onChange={handleChange}
          name="email"
          type="email"
          value={friend.email}
          placeholder="email"
        />
        <button type="submit">Submit</button>
        {/* <button type="reset">Reset</button> */}
      </form>
    </div>
  );
}
