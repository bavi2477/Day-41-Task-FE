import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UserPassRedirect = () => {

    const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the password reset form with the token
    navigate(`/reset-password/${token}`);
  }, [token, navigate]);
    return (
        <div>
            Redirecting to password reset form...
        </div>
    );
};

export default UserPassRedirect;