import React from "react";
import axiosCreator from "../utils/axiosCreator";

export default function Friend(props) {
  const [friend, setFriend] = React.useState({ id: "", name: "", email: "", age: "" });

  console.log("friend props", props);

  //Optimally We should just pass friend down as a prop but I'm just practicing React Router Dom
  React.useEffect(() => {
    axiosCreator()
      .get(`/friends/${props.match.params.id}`)
      .then(res => {
        setFriend(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleEdit = () => {
    props.history.push({ pathname: "/updatefriend", state: friend });
  };

  return (
    <div>
      Friend
      <div>{friend.id}</div>
      <div>{friend.name}</div>
      <div>{friend.age}</div>
      <div>{friend.email}</div>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
}
