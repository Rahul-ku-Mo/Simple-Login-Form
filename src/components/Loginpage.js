import { React, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { toast } from "react-toastify";
import TextInput from "./shared/TextInput";
import Button from "./shared/Button";
import users from "./apis/users";

const Loginpage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  const handleSubmit = async () => {
    try {
      const res = await users.post("/api/auth/staffLogin", {
        email: email,
        password: password,
      });

      toast.success("Login Successful");
      //clear inputs
      setEmail("");
      setPassword("");
      history.push("/empty");
    } catch (error) {
      if (error.message === "Request failed with status code 401")
        toast.error("Email or password is incorrect");
      else if (error.message === "Request failed with status code 400") {
        toast.error("Email/password is missing");
      }
    }
  };

  const updateEmail = (value) => {
    setEmail(value);
  };
  const updatePassword = (value) => {
    setPassword(value);
  };

  return (
    <>
      <form className="flex flex-col my-24 border-grey border-2 w-fit mx-auto p-5">
        <TextInput
          labelText={"Email"}
          type={"email"}
          onValueChange={updateEmail}
          autocomplete={"current-email"}
          value={email}
        />
        <TextInput
          labelText={"Password"}
          type={"password"}
          onValueChange={updatePassword}
          autocomplete={"current-password"}
          value={password}
        />
        <Button btnName={"Login"} type={"submit"} handleFunc={handleSubmit} />
        <Link
        className="flex justify-center text-md font-serif mt-3 font-bold cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
        to="/register"
      >
        Not Registered yet ?
      </Link>
      </form>
      
    </>
  );
};
export default Loginpage;
