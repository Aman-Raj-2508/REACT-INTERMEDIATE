import React from 'react'
import { useState } from 'react';
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const SignupForm = ({ setIsLoggedIn }) => {

    const [formData, setformData] = useState({ firstname: '', lastname: '', email: '', password: '', confirmpassword: '' });
    // Handling password
    const [showPassword, setshowPassword] = useState(false);
    // For handling password
    const [confirmshowPassword, setconfirmshowPassword] = useState(false);
    // instructor student tab
    const [accountType, setAccountType] = useState("student");

    const navigate = useNavigate();

    function changeHandler(event) {
        const { name, value } = event.target;

        setformData((prevformData) => {
            return {
                ...prevformData,
                [name]: value
            }
        })

    }

    function eyeHandler() {
        setshowPassword(!showPassword);

    }

    function eyeHandler1() {
        setconfirmshowPassword(!confirmshowPassword);
    }

    function submitHandler(event) {
        event.preventDefault();

        if (formData.password != formData.confirmpassword) {
            toast.error("Passwords do not match");
            return;
        }

        setIsLoggedIn(true);
        toast.success("Account Created");

        const accountData = {
            ...formData
        };

        // console.log(accountData);

        const finalData = {
            ...accountData,
            accountType
        }

        console.log("Printing final data")
        console.log(finalData);

        navigate("/dashboard");
    }


    return (
        <div>
            {/* Student-Instructor tab */}

            <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
                <button
                    className={`${accountType === "student"
                        ?
                        "bg-richblack-900 text-richblack-5"
                        : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
                    onClick={() => setAccountType("student")}
                >
                    Student
                </button>

                <button
                    className={`${accountType === "instructor"
                        ?
                        "bg-richblack-900 text-richblack-5"
                        : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
                    onClick={() => setAccountType("instructor")}
                >
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandler}>

                {/* Firstname Lastname */}
                <div className='flex flex-col md:flex-row gap-4 mt-[20px]'>
                    <label className='w-full'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name<sup className='text-pink-200'>*</sup></p>
                        <input
                            required
                            type='text'
                            name='firstname'
                            onChange={changeHandler}
                            placeholder='Enter first name'
                            value={formData.firstname}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />
                    </label>

                    <label className='w-full'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name<sup className='text-pink-200'>*</sup></p>
                        <input
                            required
                            type='text'
                            name='lastname'
                            onChange={changeHandler}
                            placeholder='Enter last name'
                            value={formData.lastname}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />
                    </label>
                </div>

                {/* Email address */}
                <div className='mt-[20px]'>

                    <label className='w-full mt-[20px]'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address <sup className='text-pink-200'>*</sup> </p>
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

                </div>

                {/* Create password and confrim Password */}
                <div className='w-full flex flex-col md:flex-row gap-4 mt-[20px] '>

                    <label className='w-full relative'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Create password<sup className='text-pink-200'>*</sup> </p>
                        <input
                            required
                            type={
                                showPassword ? ("text") : ("password")
                            }
                            placeholder='Enter password'
                            onChange={changeHandler}
                            name='password'
                            value={formData.password}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />

                        <span className='absolute right-3 top-[38px] cursor-pointer' >
                            {
                                showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' onClick={eyeHandler} />) : (<AiOutlineEye fontSize={24} fill='#AFB2BF' onClick={eyeHandler} />)
                            }
                        </span>
                    </label>

                    <label className='w-full relative'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confirm password<sup className='text-pink-200'>*</sup> </p>
                        <input
                            required
                            type={
                                confirmshowPassword ? ("text") : ("password")
                            }
                            placeholder='Enter password again'
                            onChange={changeHandler}
                            name='confirmpassword'
                            value={formData.confirmpassword}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />

                        <span className='absolute right-3 top-[38px] cursor-pointer'>
                            {
                                showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' onClick={eyeHandler1} />) : (<AiOutlineEye fontSize={24} fill='#AFB2BF' onClick={eyeHandler1} />)
                            }
                        </span>
                    </label>

                </div>

                <button className=' w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'> Create account </button>
            </form>



        </div>
    )
}

export default SignupForm;