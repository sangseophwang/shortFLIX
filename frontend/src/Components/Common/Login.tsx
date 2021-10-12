import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";
import { Link } from "react-router-dom";
import "../Common/scss/Login.scss";

const clientId =
  "5929487668-clkq5dmc730psab18leaflnb86eakoog.apps.googleusercontent.com";

const Login = () => {
  const [isLoggedin, setIsLoggedin] = useState<boolean>(false);
  const handleLogin = async (googleData: any) => {
    const res = await fetch("/login/google", {
      method: "POST",
      body: JSON.stringify({ token: googleData.tokenID }),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    setIsLoggedin(true);
    console.log(res.statusText);
  };
  const onFailure = (res: any) => {
    console.log("[Login Failed] res:", res);
  };

  return (
    <div>
      {!isLoggedin ? (
        <GoogleLogin
          clientId={clientId}
          render={(renderProps) => (
            <button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              로그인
            </button>
          )}
          buttonText="Login"
          onSuccess={handleLogin}
          onFailure={onFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
      ) : (
        <Link to="/mypage">
          <button>마이페이지</button>
        </Link>
      )}
    </div>
  );
};

export default Login;
