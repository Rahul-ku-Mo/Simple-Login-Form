import React, { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import TextInput from "../components/shared/TextInput";
import Button from "./shared/Button";
import users from "./apis/users";

const Registerpage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSubmit = async () => {
    try {
      await users.post("/api/auth/staffRegister", {
        email: email,
        password: password,
        name: name,
        mobile: mobile,
      });
      toast.success("Registation Successful");
      setEmail("");
      setMobile("");
      setPassword("");
      setName("");
    } catch (error) {
      if (error.message === "Request failed with status code 400")
        toast.error("Some of the fields are missing or incorrect!");
      else if (error.message === "Request failed with status code 402") {
        toast.error("User Already Exists with the given email id");
      }
    }
  };

  const updateEmail = (value) => {
    setEmail(value);
  };
  const updatePassword = (value) => {
    setPassword(value);
  };
  const updateName = (value) => {
    setName(value);
  };
  const updateMobile = (value) => {
    setMobile(value);
  };

  return (
    <>
      <form className="flex flex-col my-24 border-grey border-2 w-fit mx-auto p-5 ">
        <TextInput
          labelText={"Email"}
          type={"email"}
          onValueChange={updateEmail}
          value={email}
        />
        <TextInput
          labelText={"Password"}
          type={"password"}
          onValueChange={updatePassword}
          value={password}
        />
        <TextInput
          labelText={"Name"}
          type={"text"}
          onValueChange={updateName}
          value={name}
        />
        <TextInput
          labelText={"Mobile"}
          type={"tel"}
          onValueChange={updateMobile}
          value={mobile}
        />
        <Button btnName={"Register"} handleFunc={handleSubmit} />
        <Link
          className="flex justify-center text-md font-serif mt-3 font-bold cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
          to="/"
        >
          Sign In instead ?
        </Link>
      </form>
    </>
  );
};
export default Registerpage;
