import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Cookies from 'js-cookie';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const testAuthData = {
        userID: 3,
        username: 'user',
        password: 'test',
    };
    const authenticateUser = (username, password) => {
        if (username === testAuthData.username && password === testAuthData.password) {
            const userID = testAuthData.userID;
            const userData = {
                userID,
                username,
                password,
            };
            const expirationTime = new Date(new Date().getTime() + 60000);
            sessionStorage.setItem('auth', JSON.stringify(userData));
            Cookies.set('auth', JSON.stringify(userData), {expires: expirationTime});
            return true;
        }
        return false;
    };
    const handleLogin = (e) => {
        e.preventDefault();
        const isAuthenticated = authenticateUser(username, password);
        if (isAuthenticated) {
            navigate('/accounts');
        } else {
            // Show error message or perform other actions for failed authentication
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Log In</h2>
                    <form onSubmit={handleLogin}>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="btn btn-outline-primary">Login</button>


                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;