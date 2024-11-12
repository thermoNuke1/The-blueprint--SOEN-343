import { useState } from "react";
import loginService from '/src/services/login.js';
import PropTypes from 'prop-types';


const Login = ({setErrorMessage, setUser}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            
            const user = await loginService.login({
                username,
                password,
            });
            setUser(user);
            setUsername('');
            setPassword('');
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
