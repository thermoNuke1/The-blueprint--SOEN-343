import userService from '../services/user.js';
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
    });

    const user = JSON.parse(window.localStorage.getItem('loggedappUser'));

    const getUserInfo = async () => {
        try {
            // Fetch user info
            const userInfo = await userService.getUserByUsername(user.username);

            // Fetch user points, level, and discount
            // const userPoints = await userService.getUserPoints(user.username);

            // Update the userData state with new data
            setUserData({
                firstName: userInfo.firstname,
                lastName: userInfo.lastname,
                points: (userInfo.points),
                level: userInfo.level,
                discount: userInfo.discount,
            });
            console.log(userInfo)
        } catch {
            setErrorMessage('Unable to load. Please log in.');
            setTimeout(() => {
                setErrorMessage(null);
            }, 5000);
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

    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-semibold mb-4">Account Details</h2>

            {/* Email (as Username) */}
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <p className="mt-1 text-gray-800">{user.username}</p>
            </div>

            {/* First Name */}
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">First Name</label>
                <p className="mt-1 text-gray-800">{userData.firstName}</p>
            </div>

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
        </div>
    );
};

AccountPage.propTypes = {
    setErrorMessage: PropTypes.func.isRequired,
};

export default AccountPage;
