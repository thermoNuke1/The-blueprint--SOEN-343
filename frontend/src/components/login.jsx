import { useState } from "react";
import loginService from '/src/services/login.js';
import userService from '/src/services/user.js'
import parcelService from '/src/services/parcel.js'
import shipmentService from '/src/services/shipment.js'
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";


const Login = ({setErrorMessage, setUser}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
	const navigate = useNavigate();
    

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            
            const user = await loginService.login({
                username,
                password,
            });
            window.localStorage.setItem(
                'loggedappUser', JSON.stringify(user)      
            )
            parcelService.setToken(user.token)
            userService.setToken(user.token)
            shipmentService.setToken(user.token); 

            setUser(user)
            setUsername('')
            setPassword('')
            navigate('/')
        } catch (exception) {
            setErrorMessage('Wrong credentials');
            setUser(null);
            setTimeout(() => {
                setErrorMessage(null);
            }, 5000);
        }
    };

    return (
        <div >
            
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        value={username}
                        name="username"
                        onChange={({ target }) => setUsername(target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        value={password}
                        name="password"
                        onChange={({ target }) => setPassword(target.value)}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

Login.propTypes = {
    setErrorMessage: PropTypes.func.isRequired,
    setUser: PropTypes.func.isRequired,
}

export default Login;
