import axios from "axios";
import React, {useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function Signup() {
    let navigate = useNavigate();

    const [user, setUser] = useState({
        userName: "", userEmail: "", userFirstName: 0, userLastName: "", userHashedPassword: ""
    });

    const { userName, userEmail, userFirstName, userLastName, userHashedPassword } = user

    useEffect(() => {

    }, []);

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/api/users/signup", user);
        navigate("/");
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Register User</h2>

                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="UserName" className="form-label">
                                User Name
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="w Username"
                                name="userName"
                                value={userName}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="UserEmail" className="form-label">
                                User Email
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="w email"
                                name="userEmail"
                                value={userEmail}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="UserFirstName" className="form-label">
                                User First Name
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="w first name"
                                name="userFirstName"
                                value={userFirstName}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="UserLastName" className="form-label">
                                User Last Name
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="w last name"
                                name="userLastName"
                                value={userLastName}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="UserHashedPassword" className="form-label">
                                User Password
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="w password"
                                name="userHashedPassword"
                                value={userHashedPassword}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <button type="submit" className="btn btn-outline-primary">
                            Submit
                        </button>
                        <Link className="btn btn-outline-danger mx-2" to="/webapp/transactions">
                            Cancel
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}
