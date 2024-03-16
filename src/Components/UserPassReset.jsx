import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserPassReset = () => {
    const { token } = useParams();
    const [newPassword, setNewPassword] = useState('');
    const [responseMsg, setResponseMsg] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch the token from the URL parameters and validate it
        const fetchToken = async () => {
            try {
                const response = await axios.get(`https://day-41-task-be.onrender.com/api/user/reset-password/${token}`);
                if (response.data.error) {
                    toast.error(response.data.error);
                    setResponseMsg(response.data.error);
                }
            } catch (error) {
                console.error("Token validation error:", error);
                toast.error("Token validation failed");
                setResponseMsg("Token validation failed");
            }
        };

        fetchToken();
    }, [token]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post(`https://day-41-task-be.onrender.com/api/user/reset-password/${token}`, { password: newPassword });
            if (response.data.message) {
                toast.success(response.data.message, {
                    onClose: () => navigate('/login')
                });
            }
        } catch (error) {
            console.error("Password reset error:", error);
            toast.error(error.response.data.error);
            setResponseMsg(error.response.data.error);
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <div className="col-md-6 shadow p-4">
                <h1>Password</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="newPassword" className="form-label">New Password:</label>
                        <input type="password" id="newPassword" className="form-control" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
                    </div>
                    <button type='submit' className="btn btn-primary d-block w-100">Reset Password</button>
                </form>
                <h1>{responseMsg}</h1>
            </div>
            <ToastContainer />
        </div>
    );
};

export default UserPassReset;
