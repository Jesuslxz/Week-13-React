import React from "react";
import "../"
function LoginForm(){
    return (
        <div className="container mt-2">
            <h3>Login</h3>
            <div>
                <input type="text" className="form-control mt-3" name="UserName" aria-label="" id="UserName" placeholder="UserName"/>
                <input type="text" className="form-control mt-3" name="Password" aria-label="" id="Password" placeholder="Password"/>
            </div>
        </div>
    );
}

export default LoginForm;