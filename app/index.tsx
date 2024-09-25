import React from "react";
import { Redirect } from "expo-router";
import Home from "./home/index";

export default function Index() {
  return (
    <>
      <Redirect href={"/login-signup/login"}></Redirect>
    </>
  );
}
