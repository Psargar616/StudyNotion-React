import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const LoginForm = ({ setIsLoggedIn }) => {
  // to navigate to different page
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });


//   to determine type of password field and icon shown
  const [showPassword, setShowPassword] = useState(false);
// adding new data along with the old data using spread operator
  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }


  function submitHandler(event) {
    // to remove default behaviours
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In");
    // goto dashboard after login
    console.log(formData);
    navigate("/dashboard");
  }

  return (
    <form onSubmit={submitHandler} className="flex flex-col w-full gap-y-4 mt-6">
      <label className="w-full">
        <p className="text-[0.9rem] text-richblack-5 mb-1 leading-[1.375rem]">
          Email Address<sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type="email"
          value={formData.email}
          onChange={changeHandler}
          placeholder="Enter Email Address"
          name="email"
          className="w-full p-[12px] bg-richblack-800 rounded-[0.5rem] text-richblack-5  border-richblack-700"
        />
      </label>
     {/* setShowPassword determines whether type is password or text  and icon shown on UI*/}
      <label className="w-full relative">
        <p className="text-[0.9rem] text-richblack-5 mb-1 leading-[1.375rem]">
          Password<sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type={showPassword ? ("text") : ("password")}
          value={formData.password}
          onChange={changeHandler}
          placeholder="Enter Password"
          name="password"
          className="w-full p-[12px] bg-richblack-800 rounded-[0.5rem] text-richblack-5  border-richblack-700"
        />
       
        <span onClick={() => setShowPassword((prev) => !prev)}
        className="absolute cursor-pointer right-3 top-[40%]">
          {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2Bf"/>) : (<AiOutlineEye fontSize={24} fill="#AFB2Bf"/>)}
        </span>

        <Link to="#">
          <p className="text-xs text-blue-100 mt-1 ml-auto max-w-max
          ">Forgot Password</p>
        </Link>
      </label>

      <button
       className="bg-yellow-50 rounded-[8px] text-richblack-900 font-semibold px-[12px] py-[8px] mt-6">Sign In</button>
    </form> 
  );
};

export default LoginForm;
