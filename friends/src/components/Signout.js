import React from "react";
import { Redirect } from "react-router-dom";

export default function() {
  localStorage.removeItem("token");
  return <Redirect to="/signin" />;
}
