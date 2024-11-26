import userService from '../services/user.js';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const AccountPage = ({ setErrorMessage }) => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const user = JSON.parse(window.localStorage.getItem('loggedappUser'));

    const getUserInfo = async () => {
        try {
            const userInfo = await userService.getUserByUsername(user.username);
            setFirstName(userInfo.firstname);
            setLastName(userInfo.lastname);
        } catch {
            setErrorMessage('Unable to load, Please log in.');
            setTimeout(() => {
                setErrorMessage(null);
            }, 5000);
        }
    };

    useEffect(() => {
        if (user === null) {
            navigate('/');
        } else {
            getUserInfo();
        }
    }, []);

    if (user === null) {
        return null;
    }

    return (
         <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow-sm">
                        <div className="card-header bg-primary text-white">
                            <h2 className="card-title mb-0 text-center">Account Details</h2>
                        </div>
                        <div className="card-body">
                            {/* Email */}
                            <div className="mb-3">
                                <label className="form-label fw-bold">Email</label>
                                <p className="form-control-plaintext">{user.username}</p>
                            </div>

                            {/* First Name */}
                            <div className="mb-3">
                                <label className="form-label fw-bold">First Name</label>
                                <p className="form-control-plaintext">{firstName}</p>
                            </div>

                            {/* Last Name */}
                            <div className="mb-3">
                                <label className="form-label fw-bold">Last Name</label>
                                <p className="form-control-plaintext">{lastName}</p>
                            </div>
                        </div>
                        <div className="card-footer text-center">
                            <button
                                className="btn btn-primary"
                                onClick={() => navigate("/")}
                            >
                                Back to Home
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

AccountPage.propTypes = {
    setErrorMessage: PropTypes.func.isRequired,
};

export default AccountPage;
