import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserPassRedirect = () => {
    const { token } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchToken = async () => {
            try {
                // Perform a GET request to fetch the token
                const response = await axios.get(`https://your-api-url.com/api/user/reset-password/${token}`);
                if (response.data.error) {
                    // Handle error response
                    console.error("Token validation error:", response.data.error);
                    // Redirect to an error page or handle the error as needed
                    navigate('/error');
                } else {
                    // Redirect to the password reset form with the token
                    navigate(`/reset-password/${token}`);
                }
            } catch (error) {
                // Handle network errors or other exceptions
                console.error("Token fetch error:", error);
                // Redirect to an error page or handle the error as needed
                navigate('/error');
            }
        };

        fetchToken();
    }, [token, navigate]);

    return (
        <div>
            Redirecting to password reset form...
        </div>
    );
};

export default UserPassRedirect;
