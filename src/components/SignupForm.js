import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignupForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setshowConfirmPassword] = useState(false);
  const [accType, setAccType] = useState("student");

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    // prevent default behaviour
    event.preventDefault();
    // password matching
    if (formData.password != formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    // set logged in = true
    setIsLoggedIn(true);
    toast.success("Account Created");
    // printing account data

    const finalData = {
        ...formData,
        accType

      };
    console.log("printing acc data ");
    console.log(formData);
    console.log("final data:",finalData);
    // navigate to dashboard
    navigate("/dashboard");
    
  }

  return (
    <div>
      {/* student-Instructor tab */}
      <div className="flex p-1 my-6 gap-x-1 rounded-full max-w-max bg-richblack-800">
        <button
          className={`${
            accType === "student"
              ? "bg-richblack-900 text-richblack-5 py-2 px-5 rounded-full transition-all duration-200 text-lg"
              : "bg-transparent text-richblack-200 py-2 px-5 rounded-full transition-all duration-200"
          }`}
          onClick={() => setAccType("student")}
        >
          Student
        </button>
        <button
          className={`${
            accType === "instructor"
              ? "bg-richblack-900 text-richblack-5 py-2 px-5 rounded-full transition-all duration-200 text-lg"
              : "bg-transparent text-richblack-200 py-2 px-5 rounded-full transition-all duration-200"
          }`}
          onClick={() => setAccType("instructor")}
        >
          Instructor
        </button>
      </div>

      <form onSubmit={submitHandler}>
        {/* first name and lastName */}
        <div className="flex justify-between gap-x-4 my-[20px]">
          <label className="w-full">
            <p className="text-[0.9rem] text-richblack-5 mb-1 leading-[1.375rem]">
              First Name<sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="firstName"
              onChange={changeHandler}
              placeholder="Enter First Name"
              value={formData.firstName}
              className="w-full p-[12px] bg-richblack-800 rounded-[0.5rem] text-richblack-5  border-richblack-700"
            />
          </label>

          <label className="w-full">
            <p className="text-[0.9rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Last Name<sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="lastName"
              onChange={changeHandler}
              placeholder="Enter Last Name"
              value={formData.lastName}
              className="w-full p-[12px] bg-richblack-800 rounded-[0.5rem] text-richblack-5  border-richblack-700"
            />
          </label>
        </div>
        {/* email Add */}
        <div className="my-[20px]">
          <label>
            <p className="text-[0.9rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Email Address<sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="email"
              name="email"
              onChange={changeHandler}
              placeholder="Enter Email Address "
              value={formData.email}
              className="w-full p-[12px] bg-richblack-800 rounded-[0.5rem] text-richblack-5 border-richblack-700"
            />
          </label>
        </div>

        {/* createPassword and Confirm Password container*/}
        <div className="flex justify-between gap-x-4 my-[20px]">
          <label className="relative w-full">
            <p className="text-[0.9rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Create Password<sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={changeHandler}
              placeholder="Enter Password"
              value={formData.password}
              className="w-full p-[12px] bg-richblack-800 rounded-[0.5rem] text-richblack-5  border-richblack-700"
            />
            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-[38px]"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2Bf" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2Bf" />
              )}
            </span>
          </label>

          <label className="relative w-full">
            <p className="text-[0.9rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Confirm Password<sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              onChange={changeHandler}
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              className="w-full p-[12px] bg-richblack-800 rounded-[0.5rem] text-richblack-5  border-richblack-700"
            />
            <span
              onClick={() => setshowConfirmPassword((prev) => !prev)}
              className="absolute right-3 top-[38px]"
            >
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2Bf" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2Bf" />
              )}
            </span>
          </label>
        </div>
        {/* Create Account btn */}
        <button className=" w-full bg-yellow-50 rounded-[8px] text-richblack-900 font-semibold px-[12px] py-[8px] mt-6">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
