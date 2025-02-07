import React from 'react'
import { useState } from 'react';
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const SignupForm = ({ setIsLoggedIn }) => {

    const [formData, setformData] = useState({ firstname: '', lastname: '', email: '', password: '', confirmpassword: '' });
    const [showPassword, setshowPassword] = useState(false);
    const [confirmshowPassword, setconfirmshowPassword] = useState(false);

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

        console.log(accountData);

        navigate("/dashboard");
    }


    return (
        <div>
            {/* Student-Instructor tab */}

            <div>
                <button>
                    Student
                </button>
                <button>
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandler}>

                {/* Firstname Lastname */}
                <div>
                    <label>
                        <p>First Name<sup>*</sup></p>
                        <input
                            required
                            type='text'
                            name='firstname'
                            onChange={changeHandler}
                            placeholder='Enter first name'
                            value={formData.firstname}
                        />
                    </label>

                    <label>
                        <p>Last Name<sup>*</sup></p>
                        <input
                            required
                            type='text'
                            name='lastname'
                            onChange={changeHandler}
                            placeholder='Enter last name'
                            value={formData.lastname}
                        />
                    </label>
                </div>

                {/* Email address */}
                <label>
                    <p>Email Address <sup>*</sup> </p>
                    <input
                        required
                        type='email'
                        placeholder='Enter  email address'
                        onChange={changeHandler}
                        name='email'
                        value={formData.email}

                    />
                </label>

                {/* Create password and confrim Password */}
                <div>

                    <label>
                        <p>Create password<sup>*</sup> </p>
                        <input
                            required
                            type={
                                showPassword ? ("text") : ("password")
                            }
                            placeholder='Enter password'
                            onChange={changeHandler}
                            name='password'
                            value={formData.password}
                        />

                        <span>
                            {
                                showPassword ? (<AiOutlineEyeInvisible onClick={eyeHandler} />) : (<AiOutlineEye onClick={eyeHandler} />)
                            }
                        </span>
                    </label>

                    <label>
                        <p>Confirm password<sup>*</sup> </p>
                        <input
                            required
                            type={
                                confirmshowPassword ? ("text") : ("password")
                            }
                            placeholder='Enter password again'
                            onChange={changeHandler}
                            name='confirmpassword'
                            value={formData.confirmpassword}
                        />

                        <span>
                            {
                                showPassword ? (<AiOutlineEyeInvisible onClick={eyeHandler1} />) : (<AiOutlineEye onClick={eyeHandler1} />)
                            }
                        </span>
                    </label>

                </div>

                <button> Create account </button>
            </form>



        </div>
    )
}

export default SignupForm;