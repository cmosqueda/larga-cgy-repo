import React from "react";
import { Redirect } from "expo-router";
// import Home from "./home/index";

// fontaswesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
// import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
// import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

// libraries for fontawesome
library.add(fab, fas);

export default function Index() {
  return (
    <>
      <Redirect href={"/login-signup/login"}></Redirect>
    </>
  );
}
