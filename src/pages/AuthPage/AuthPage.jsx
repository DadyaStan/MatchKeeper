import { useState } from "react";
import axios from 'axios';

import './AuthPage.scss';

function AuthPage() {

    return (
        <div className='auth-box'>
            <div class="login">
                <h1>Login</h1>
                <form method="post">
                    <input type="text" name="u" placeholder="Username" required="required" />
                    <input type="password" name="p" placeholder="Password" required="required" />
                    <button className="btn btn-primary btn-block btn-large">Log In</button>
                </form>
            </div>
            <div class="login">
                <h1>Register</h1>
                <form method="post">
                    <input type="text" name="u" placeholder="Username" required="required" />
                    <input type="password" name="p" placeholder="Password" required="required" />
                    <button className="btn btn-primary btn-block btn-large">Register</button>
                </form>
            </div>
        </div>
    )
}

export default AuthPage;