import React from "react";

import './login.scss'

import useToken from "../../Hooks/useToken";

function Login() {
    const [setToken] = useToken(true);

    const handleSubmit = (evt) => {
        evt.preventDefault();

        const { user_email, user_password } = evt.target.elements;

        fetch('https://reqres.in/api/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },

            body: JSON.stringify({
                email: user_email.value.trim(),
                password: user_password.value.trim(),
            }),
        })
            .then((response) => response.json())
            .then((data) => setToken(data?.token || false));
    };

    return (
        <div className="login">
            <h1 className="login__title">YouTube - Login</h1>

            <form onSubmit={handleSubmit}>
                <div className="login__email">
                    <p className="login__names">Username</p>
                    <input
                        type='email'
                        defaultValue='eve.holt@reqres.in'
                        name='user_email'
                    />
                </div>

                <div className="login__password">
                    <p className="login__names">Password</p>
                    <input
                        type='password'
                        defaultValue='cityslicka'
                        name='user_password'
                    />
                </div>

                <button className="login__btn">Login</button>
            </form>
        </div>

    )
}

export default Login;