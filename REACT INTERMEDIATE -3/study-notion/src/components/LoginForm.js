import React from 'react'
import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast'

const LoginForm = ({ setIsLoggedIn }) => {

    const [formData, setformData] = useState({ email: '', password: '' });

    // For navigating to Dashboard Page
    const navigate = useNavigate();


    // console.log(formData);

    // To handle password
    const [showPassword, setshowPassword] = useState(false);

    // Change Handler
    function changeHandler(event) {
        const { name, value, } = event.target;
        setformData((prevformData) => {
            return {
                ...prevformData,
                [name]: value
            }
        })
    }

    // Eye Handler
    function eyeHandler() {
        setshowPassword(!showPassword)

    }

    // Submit Handler
    function submitHandler(event) {

        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");

        navigate("/dashboard")
    }

    return (
        <form onSubmit={submitHandler}
            className="flex flex-col w-full gap-y-4 mt-6">

            {/* Email */}
            <label className='w-full'>

                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                    Email Address <sup className='text-pink-200'>*</sup> </p>
                {/* We can write the email inside label aslo */}
                <input
                    required
                    type='email'
                    placeholder='Enter  email address'
                    onChange={changeHandler}
                    name='email'
                    value={formData.email}
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'

                />
            </label>

            {/* password */}
            <label className='w-full relative'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                    Password<sup className='text-pink-200'>*</sup> </p>
                <input
                    required
                    // To handle password
                    type={
                        showPassword ? ("text") : ("password")
                    }
                    placeholder='Enter password'
                    onChange={changeHandler}
                    name='password'
                    value={formData.password}
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'

                />

                <span className='absolute right-3 top-[38px] cursor-pointer'
                    onClick={eyeHandler}>
                    {
                        showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) : (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)
                    }
                </span>
                <NavLink to="#">
                    <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>
                        Forgot Password
                    </p>
                </NavLink>
            </label>

            <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>Sign In</button>

        </form>
    )
}

export default LoginForm;