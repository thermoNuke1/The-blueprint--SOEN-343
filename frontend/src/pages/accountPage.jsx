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
            console.log()
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
                <p className="mt-1 text-gray-800">{firstName}</p>
            </div>

            {/* Last Name */}
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                <p className="mt-1 text-gray-800">{lastName}</p>
            </div>
        </div>
    );
};

AccountPage.propTypes = {
    setErrorMessage: PropTypes.func.isRequired,
};

export default AccountPage;
