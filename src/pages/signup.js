import React, { useState } from "react";

import axios from "axios";
import { signup } from "@/api/auth";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { validateSignUp } from "@/utilities/validations";

const SignupPage = () => {
  const router = useRouter();
  const handleSignUp = async () => {
    try {
      setIsLoading(true);
      let body = {
        name: name,
        email: email,
        phone: phone,
        address: address,
        password: password,
        role: role,
      };
      console.log(body);
      if (validateSignUp(body)) {
        const res = await axios.post(
          "https://rarities-backend.vercel.app/api/v1/auth/signup",
          body
        );
        if (res.status === 200 || res.status === 201) {
          toast.success("User signed up successfully!");
          router.push("/login");
        } else {
          toast.error("Error occurred in user creation.");
        }
      }
    } catch (err) {
      toast.error("Error occurred in user creation.");
    } finally {
      setIsLoading(false);
    }
  };
  const [name, setName] = useState("Saransh");
  const [email, setEmail] = useState("saranshkhulbe72@gmail.com");
  const [phone, setPhone] = useState("9650912448");
  const [address, setAddress] = useState("HRH");
  const [password, setPassword] = useState("Saransh@123");
  const [role, setRole] = useState("buyer");
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="min-h-[100vh] grid place-items-center">
      <div className="flex flex-col gap-4 items-center w-full max-w-md">
        <h2 className="text-center font-bold text-5xl text-black">Sign Up</h2>
        <div className="flex flex-col gap-2 w-full">
          {/* name */}
          <div className="form-control w-full max-w-md">
            <label className="label">
              <span className="label-text text-black">Enter your name</span>
            </label>
            <input
              value={name}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-md bg-white text-[#e26536]"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
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
          {/* role */}
          <div className="form-control w-full max-w-md">
            <label className="label">
              <span className="label-text text-black">Role</span>
            </label>
            <select
              value={role}
              className="select select-bordered max-w-md w-full bg-white text-[#e26536]"
              onChange={(e) => {
                setRole(e.target.value);
              }}
            >
              <option disabled selected>
                Pick one
              </option>
              <option value={"buyer"}>Buyer</option>
              <option value={"seller"}>Seller</option>
            </select>
          </div>
          {/* phone */}
          <div className="form-control w-full max-w-md">
            <label className="label">
              <span className="label-text text-black">
                Enter your phone number
              </span>
            </label>
            <input
              value={phone}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-md bg-white text-[#e26536]"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </div>
          {/* address */}
          <div className="form-control w-full max-w-md">
            <label className="label">
              <span className="label-text text-black">Enter your address</span>
            </label>
            <input
              value={address}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-md bg-white text-[#e26536]"
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
          </div>
          {/* password */}
          <div className="form-control w-full max-w-md">
            <label className="label">
              <span className="label-text text-black">
                Enter an 8-digit secure password
              </span>
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
              handleSignUp();
            }}
          >
            Sign up
          </button>
        ) : (
          <button className="btn btn-wide btn-disabled drop-shadow-lg bg-white text-[#e26536] loading">
            Signing up
          </button>
        )}
      </div>
    </div>
  );
};

export default SignupPage;
