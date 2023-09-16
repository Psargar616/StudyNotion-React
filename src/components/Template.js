import React from "react";
import frameImage from "../assets/frame.png";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import {FcGoogle} from "react-icons/fc"

const Template = ({ title, desc1, desc2, image, formtype, setIsLoggedIn }) => {
  console.log("ye rha mera form type");
  console.log(formtype);
  return (
    <div className="flex justify-between max-w-[1160px] mx-auto w-11/12 py-12 gap-x-12 gap-y-0 mt-4 h-full">
      {/* common template for both signup and login */}
      <div className="w-11/12 max-w-[450px]">
        <h1 className="text-richblack-5 font-semibold text-[1.84rem] leading-[2.75rem]">
          {title}
        </h1>
        <p className="flex flex-col text-[1.125rem] leading-[]1.625rem mt-4 ">
          <span className="text-richblack-100">{desc1}</span>
          <span className="text-blue-100 italic">{desc2}</span>
        </p>
        {/* render signup form or logon form based on isloggedIn variable */}
        {formtype === "signup" ? (
          <SignupForm setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        )}
        {/* line and OR conponent */}
        <div className="flex w-full items-center gap-x-4 my-4 ">
          <div className="w-full h-[1px] bg-richblack-700"></div>
          <p className=" text-richblack-700 font-medium leading-[1.375rem]">OR</p>
          <div className="w-full h-[1px] bg-richblack-700"></div>
        </div>
        {/* google btn */}
        <button className="flex w-full justify-center items-center rounded-md font-medium text-richblack-100 px-[12px] py-[8px] gap-x-2 mt-6 border-solid border border-richblack-700">
            <FcGoogle fontSize="1.75rem"/>
          <p>Sign Up with Google</p>
        </button>
      </div>
      {/* images  */}
      <div className="relative w-11/12 max-w-[450px]">
        {/* common img */}
        <img
          src={frameImage}
          alt="Pattern"
          width={558}
          height={504}
          loading="lazy"
        />

        {/* image from props  */}
        <img
          src={image}
          alt="Students"
          width={558}
          height={490}
          loading="lazy"
          className="absolute -top-4 right-4 "
        />
      </div>
    </div>
  );
};

export default Template;
