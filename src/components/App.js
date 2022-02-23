import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Loginpage from "./Loginpage";
import Registerpage from "./Registerpage";
import Emptypage from "./Emptypage";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <Router>
        <Route path="/" exact component={Loginpage} />
        <Route path="/register" exact component={Registerpage} />
        <Route path="/empty" exact component={Emptypage} />
        <ToastContainer position="top-center" theme="dark" />
      </Router>
    </>
  );
};

export default App;
