// import { Link } from 'heroicons-react'
import axios from "axios";
import React, { useState , useContext } from "react";
import { Link } from "react-router-dom";
import { BackendAPIContext } from "../ContextAI/BackendAPI";

export default function Signup() {
  const d = useContext(BackendAPIContext);
  // const requestOptions = {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({ title: "React Hooks POST Request Example" }),
  // };
  const [data, setdata] = useState(
    {
      "FullName": "" , 
      "Email": "",
      "UserName": "",
      "Pass": "",
      "cPass":""
    }
  );
  let key,value;
  const sign = (e) => {
    key=e.target.name;
    value=e.target.value;
    setdata({...data,[key]:value});
  };
  const save=()=>{
    if(data.Pass!==data.cPass)
    {
      console.log(data.Pass+"  "+data.cPass);
      window.alert("Passwords doesn't match");
      return;
    }
    axios({
      method: "post",
      url: d.url+"Signup",
      data: data,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        //handle success
        document.getElementById("tologin").click();
        // console.log(response);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
    // console.log(JSON.stringify(data));
  


  };
  return (
    <>
      <form>
        <div className=" min-h-screen flex flex-col">
          <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div className="bg-gray-200 px-6 py-8 rounded shadow-md text-black w-full">
              <h1 className="mb-8 text-3xl text-center">Sign up</h1>
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="FullName"
                placeholder="Full Name"
                autoComplete="off"
                value={data.FullName}
                onChange={sign}
                required
              />

              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="Email"
                placeholder="Email"
                autoComplete="off"
                value={data.Email}
                onChange={sign}
                required
              />
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="UserName"
                placeholder="UserName"
                autoComplete="off"
                value={data.UserName}
                onChange={sign}
                required
              />
              <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="Pass"
                placeholder="Password"
                autoComplete="off"
                value={data.Pass}
                onChange={sign}
                required
              />
              <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="cPass"
                placeholder="Confirm Password"
                autoComplete="off"
                value={data.cpass}
                onChange={sign}
                required
              />

              <button
                type="button"
                className="w-full text-center py-3 rounded bg-blue-400 text-black hover:bg-blue-200 focus:outline-none my-1"
                onClick={save}
              >
                Create Account
              </button>

              <div className="text-center text-sm text-black mt-4">
                By signing up, you agree to the&nbsp;
                <Link className="hover:underline underline-offset-3" to="/">
                  Terms of Service&nbsp;
                </Link>{" "}
                and&nbsp;
                <Link className="hover:underline underline-offset-3" to="/">
                  Privacy Policy
                </Link>
              </div>
            </div>

            <div className="mt-6">
              Already have an account? &nbsp;
              <Link
                className=" text-blue-500 hover:underline underline-offset-3"
                to="../login/"
                id="tologin"
              >
                Log in
              </Link>
              .
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
