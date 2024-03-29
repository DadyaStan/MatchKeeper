import './AuthPage.scss';



function AuthPage() {
    return (
        <div className='auth-box'>
            <div class="login">
                <h1>Login</h1>
                <form method="post">
                    <input type="text" name="u" placeholder="Username" required="required" />
                    <input type="password" name="p" placeholder="Password" required="required" />
                    <button class="btn btn-primary btn-block btn-large">Let me in.</button>
                </form>
            </div>
            <div class="login">
                <h1>Register</h1>
                <form method="post">
                    <input type="text" name="u" placeholder="Username" required="required" />
                    <input type="password" name="p" placeholder="Password" required="required" />
                    <input type="password" name="p" placeholder=" Repeat Password" required="required" />
                    <button class="btn btn-primary btn-block btn-large">Register</button>
                </form>
            </div>
        </div>
    )
}

export default AuthPage;