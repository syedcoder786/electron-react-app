import React from 'react';
import { Link } from 'react-router-dom';

function Login(props) {
    return (
        <div>
            <div class="container">
                <h2>Login Form</h2>
                <form>
                    <div class="form-group">
                        <label for="uname">Email:</label>
                        <input type="email" class="form-control" id="uname" placeholder="Enter Email" name="uname" required/>
                    </div>
                    <div class="form-group">
                        <label for="pwd">Password:</label>
                        <input type="password" class="form-control" id="pwd" placeholder="Enter Password" name="pswd" required/>
                    </div>
                    <div class="form-group form-check">
                        <label class="form-check-label">
                        <input class="form-check-input" type="checkbox" name="remember" required/> I agree on blabla.
                        </label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                {/* <a target="_blank" href="/signup">New User? Signup</a> */}
                <Link to="/signup">New User? Signup</Link>
            </div>  
        </div>
    );
}

export default Login;