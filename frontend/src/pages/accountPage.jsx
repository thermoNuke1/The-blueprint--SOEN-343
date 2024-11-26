import userService from '../services/user.js'; // Ensure this is the correct path
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const AccountPage = ({ setErrorMessage }) => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        points: 0,
        level: 1,
        discount: 0,
        Subscription: false,
    });

    const user = JSON.parse(window.localStorage.getItem('loggedappUser'));

    const getUserInfo = async () => {
        try {
            const userInfo = await userService.getUserByUsername(user.username);
            console.log(userInfo)
            setUserData({
                firstName: userInfo.firstname,
                lastName: userInfo.lastname,
                points: userInfo.points || 0,
                level: userInfo.level || 1,
                discount: userInfo.discount || 0,
                Subscription: userInfo.Subscription,
            });
            console.log("User data updated:", userInfo);
        } catch (error) {
            console.error("Error fetching user data:", error);
            setErrorMessage('Unable to load. Please log in.');
        }
    };

    const handleSubscribe = async () => {
        try {
            const userInfo = await userService.getUserByUsername(user.username);
            console.log(userInfo);
            console.log("Calling Subscribe API...");
            const response = await userService.Subscribe(userInfo.username);
            console.log("Subscribe API response:", response);
            if (response.Subscription) {
                setUserData((prevData) => ({
                    ...prevData,
                    Subscription: true,
                }));
            }
        } catch (error) {
            console.error("Error subscribing:", error);
        }
    };

    useEffect(() => {
        if (!user) {
            navigate('/');
        } else {
            getUserInfo();
        }
    }, []);

    if (!user) {
        return null;
    }

    const discountCode = userData.level > 1 ? `LEVEL${userData.level}_DISCOUNT` : 'No discount available';

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
                                <p className="form-control-plaintext">{userData.firstName}</p>
                            

            {/* Last Name */}
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                <p className="mt-1 text-gray-800">{userData.lastName}</p>
            </div>

            {/* Points */}
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Points</label>
                <p className="mt-1 text-gray-800">{userData.points}</p>
            </div>

            {/* Level */}
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Level</label>
                <p className="mt-1 text-gray-800">{userData.level}</p>
            </div>

            {/* Discount */}
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Discount</label>
                <p className="mt-1 text-gray-800">{userData.discount}%</p>
            </div>

            {/* Discount Code */}
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Available Discount Code</label>
                <p className="mt-1 text-gray-800">{discountCode}</p>
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Subscription Status</label>
                <p className="mt-1 text-gray-800">
                    {userData.Subscription ? "Active" : "Not Subscribed"}
                </p>
            </div>

            <button
                onClick={handleSubscribe}
                disabled={userData.Subscription}
                className={`px-4 py-2 ${
                    userData.Subscription ? 'bg-gray-400' : 'bg-blue-500'
                } text-white rounded-md`}
            >
                {userData.Subscription ? "Subscribed" : "Subscribe"}
            </button>
        </div>
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
