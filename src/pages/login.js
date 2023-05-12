import React, { useState } from "react";

import { signin } from "@/api/auth";
import { toast } from "react-toastify";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import { validateLogin } from "@/utilities/validations";

const LoginPage = () => {
  const router = useRouter();
  const [cookie, setCookie] = useCookies();
  const handleLogin = async () => {
    try {
      setIsLoading(true);
      let body = {
        email: email,
        password: password,
      };

      if (validateLogin(body)) {
        const res = await signin(body);

        if (res.status === 200 || res.status === 201) {
          toast.success("User logged in successfully!");
          const { role, _id, token } = res.data.data;

          if (role === "buyer") {
            router.push(`/user/${_id}`);
          } else if (role === "seller") {
            router.push(`/user/${_id}`);
          } else if (role === "admin") {
            router.push("/user/${_id}");
          } else {
            router.push("/");
          }
        }
      }
    } catch (err) {
      console.log(err);
      toast.error("Error occurred in user creation.");
    } finally {
      setIsLoading(false);
    }
  };
  const [email, setEmail] = useState("saranshkhulbe72@gmail.com");
  const [password, setPassword] = useState("Saransh@123");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="min-h-[100vh] grid place-items-center">
      <div className="flex flex-col gap-4 items-center w-full max-w-md">
        <h2 className="text-center font-bold text-5xl text-black">Login</h2>
        <div className="flex flex-col gap-2 w-full">
          {/* email */}
          <div className="form-control w-full max-w-md">
            <label className="label">
              <span className="label-text text-black">Enter your email id</span>
            </label>
            <input
              value={email}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-md bg-white text-[#e26536]"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          {/* password */}
          <div className="form-control w-full max-w-md">
            <label className="label">
              <span className="label-text text-black">Enter your password</span>
            </label>
            <input
              value={password}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-md bg-white text-[#e26536]"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
        </div>
        {!isLoading ? (
          <button
            className="btn btn-wide drop-shadow-lg bg-white text-[#e26536] hover:bg-[#e26536] hover:text-white"
            onClick={() => {
              handleLogin();
            }}
          >
            Login
          </button>
        ) : (
          <button className="btn btn-wide btn-disabled drop-shadow-lg bg-white text-[#e26536] loading">
            Logging in
          </button>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
