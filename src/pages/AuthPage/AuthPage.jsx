import { useState } from "react";
import axios from 'axios';

import './AuthPage.scss';

function AuthPage() {
    //const [value, setValue] = useState({});

    let acccess_token = localStorage.getItem('access_token');
    let name;
    let pass;
    let headers = {'Authorization': 'Bearer ' + acccess_token};

    const url = 'http://localhost:3000/auth/login?nickname=' + name + '&password=' + pass;

    const getHash = () => {
        axios.post(url)
            .then(response => {
                //localStorage.setItem('access_token', response.data.acccess_token);
                console.log(response);
            });
    };
    
    const setDataHandler = () => {
        name = document.getElementById('login_name').value
        pass = document.getElementById('login_pass').value

        getHash()
    }

    return (
        <div className='auth-box'>
            <div class="login">
                <h1>Login</h1>
                <form method="post">
                    <input id="login_name" type="text" name="u" placeholder="Username" required="required" />
                    <input id="login_pass" type="password" name="p" placeholder="Password" required="required" />
                    <div className="btn btn-primary btn-block btn-large" 
                            onClick={setDataHandler}> Log In</div>
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