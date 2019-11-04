import React from "react";
import axios from "axios";

export default function SignIn(props) {
  const [user, setUser] = React.useState({
    username: "Lambda School",
    password: "i<3Lambd4"
  });

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", user)
      .then(res => {
        console.log("res",res.data)
        window.localStorage.setItem("token", res.data.payload);
        props.history.push("/friendslist");
      })
      .catch();
  };
  return (
    <div>
      Sign In Form
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={user.username} type="text" name="username" />
        <input onChange={handleChange} value={user.password} type="password" name="password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
