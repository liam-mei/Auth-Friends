import React from "react";
import axiosCreator from "../utils/axiosCreator";
import { Redirect } from "react-router-dom";

export default function UpdateFriendForm(props) {
  console.log("update props", props);
  const [friend, setFriend] = React.useState({
    name: "",
    age: "",
    email: ""
  });

  React.useEffect(() => {
    setFriend(props.location.state);
  }, []);

  const handleChange = e => {
    setFriend({
      ...friend,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosCreator()
      .put(`/friends/${friend.id}`, friend)
      .then(res => {
        props.setFriendsList(res.data);
        console.log("submit update");
        return props.history.push("/friendslist");
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      Update Friend Form
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="name"
          type="text"
          value={friend.name}
          placeholder={props.location.state.name}
        />
        <input
          onChange={handleChange}
          name="age"
          type="number"
          value={friend.age}
          placeholder={props.location.state.age}
        />
        <input
          onChange={handleChange}
          name="email"
          type="email"
          value={friend.email}
          placeholder={props.location.state.email}
        />
        <button type="submit">Submit</button>
        <button
          onClick={() => setFriend({ id: friend.id, name: "", age: "", email: "" })}
        >
          Reset
        </button>
      </form>
    </div>
  );
}
