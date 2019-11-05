import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import ProtectedRoute from "./utils/ProtectedRoute";
import axiosCreator from "./utils/axiosCreator";
import "./App.css";

import FriendsList from "./components/FriendsList";
import Friend from "./components/Friend";
import AddFriendForm from "./components/AddFriendForm";
import Navbar from "./components/Navbar";
import Signin from "./components/SignIn";
import Signout from "./components/Signout";
import UpdateFriendForm from "./components/UpdateFriendForm";

function App(props) {
  const [friendsList, setFriendsList] = React.useState([]);

  console.log("app props", props);

  // I chose to have state in App to preserve state between renders
  React.useEffect(() => {
    axiosCreator()
      .get("/friends")
      .then(res => {
        setFriendsList(res.data);
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
          console.log("Error", error.message);
        }
        console.log(error.config);
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      Friends Project
      <Navbar />
      <Switch>
        <Route exact path="/" />
        <Route path="/signin" component={Signin} />

        <ProtectedRoute
          props={props}
          path="/friendslist"
          render={props => <FriendsList friendsList={friendsList} {...props} />}
        />
        <ProtectedRoute
          path="/friends/:id"
          // {...props}
          render={props => <Friend {...props} />}
        />

        <ProtectedRoute
          path="/addfriend"
          render={props => <AddFriendForm setFriendsList={setFriendsList} {...props} />}
        />

        <ProtectedRoute path="/signout" render={props => <Signout {...props} />} />
        <ProtectedRoute
          path="/updatefriend"
          render={props => (
            <UpdateFriendForm setFriendsList={setFriendsList} {...props} />
          )}
        />
      </Switch>
    </div>
  );
}

export default withRouter(App);
