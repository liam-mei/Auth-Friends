import React from "react";
import axiosCreator from "../utils/axiosCreator";

export default function Friend(props) {

  const [friend, setFriend] = React.useState({ id: "", name: "", email: "", age: "" });

  //Optimally We should just pass friend down as a prop but I'm just practicing React Router Dom
  React.useEffect(() => {
    axiosCreator()
      .get(`/friends/${props.match.params.id}`)
      .then(res => {
        setFriend(res.data)
      })
      .catch(error => {
        if (error.response) {
          // The request was made, but the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      });
  },[props.match.params.id]);
  
  return (
    <div>
      Friend
      <div>{friend.id}</div>
      <div>{friend.name}</div>
      <div>{friend.age}</div>
      <div>{friend.email}</div>
    </div>
  );
}
