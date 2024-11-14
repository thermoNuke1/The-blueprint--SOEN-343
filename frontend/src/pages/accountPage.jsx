import PropTypes from 'prop-types';
import userService from '../services/user.js';
import { useState, useEffect } from 'react';

const AccountPage = ({ user }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const getUserInfo = async () => {
        try{
        const userInfo = await userService.getUserByUsername(user.username)
        setFirstName(userInfo.firstname);
        setLastName(userInfo.lastname);

        } catch(exception){
            // setErrorMessage('Wrong credentials');
            // setTimeout(() => {
            //     setErrorMessage(null);
            // }, 5000);
        }
    };

    useEffect(() => {
        getUserInfo();
      }, []);

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
  user: PropTypes.object.isRequired,
};

export default AccountPage;
