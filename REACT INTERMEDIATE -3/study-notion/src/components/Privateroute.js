import React, { Children } from 'react'
import { Navigate } from 'react-router-dom';

const Privateroute = ({ children, isLoggedin }) => {

    return (
        <div>

            {
                isLoggedin ? (children) : (<Navigate to="/login" />)
            }


        </div>
    )
}
export default Privateroute;