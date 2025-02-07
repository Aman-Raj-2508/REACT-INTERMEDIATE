import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../Assets/Logo.svg';
import { toast } from 'react-hot-toast';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

const NavBar = (props) => {

    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;


    return (
        <div className='flex flex-col md:flex-row gap-8 justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>

            <NavLink to="/">
                <img src={logo} alt="Logo" width={160} height={32} loading='lazy'></img>
            </NavLink>



            <nav>
                <ul className='text-richblack-100 flex gap-x-6'>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Contact</NavLink>
                    </li>
                </ul>
            </nav>

            {/* Login-SignUp-Logout-Dashboard */}

            <div className='flex items-center gap-x-4'>

                {!isLoggedIn &&
                    <NavLink to="/login">
                        <button className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                            Log in
                        </button>
                    </NavLink>
                }
                {!isLoggedIn &&
                    <NavLink to="/signup">
                        <button className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                            Sign up
                        </button>
                    </NavLink>
                }
                {isLoggedIn &&
                    <NavLink to="/">
                        <button className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'
                            onClick={() => {
                                setIsLoggedIn(false);
                                toast.success("Logged out")
                            }}
                        >Log out</button>
                    </NavLink>
                }
                {isLoggedIn &&
                    <NavLink to="/dashboard">
                        <button className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                            Dasboard
                        </button>
                    </NavLink>
                }


            </div>



        </div>
    )
}

export default NavBar;