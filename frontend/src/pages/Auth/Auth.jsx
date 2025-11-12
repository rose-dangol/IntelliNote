import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import { registerUser, loginUser, getUser } from "../../services/Auth";

const Auth = () => {
  const [activeTab, setActiveTab] = useState("login");
  const navigate = useNavigate();
  const [registerFormData, setRegisterFormData] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const [loginFormData, setLoginFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (activeTab === "signup") {
      setRegisterFormData((prev) => ({ ...prev, [name]: value }));
    } else {
      setLoginFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    await registerUser(registerFormData);
    e.target.reset();
    setActiveTab("login");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    // window.alert("Login hit")
    console.log(loginFormData);
    console.log("Login hit");
    const tokenData = await loginUser(loginFormData);
    console.log(tokenData)
    if (tokenData.error) {
      console.log("data", tokenData);
    } 
    else {
      localStorage.setItem("authToken", tokenData?.token);
      const user = await getUser(tokenData?.token)   
      // console.log(user)   
      // localStorage.setItem("userRole", user.role);
      localStorage.setItem("userData",JSON.stringify(user));
      // localStorage.setItem("username", user.username);
      if (user.role === "admin") navigate("/admin/users");
      else navigate("/dashboard");
    }
  };


  return (
    <div>
      <NavbarComponent />
      <div
        className={`auth-container ${
          activeTab === "login" ? "login" : "register"
        }`}
      >
        <div className="auth-box">
          <div className="auth-tabs">
            <button
              className={`auth-tab ${activeTab === "login" ? "active" : ""}`}
              onClick={() => setActiveTab("login")}
            >
              Login
            </button>
            <button
              className={`auth-tab ${activeTab === "signup" ? "active" : ""}`}
              onClick={() => setActiveTab("signup")}
            >
              Sign Up
            </button>
          </div>

          {activeTab === "login" ? (
            <form onSubmit={handleLogin} className="authForm">
              <h2 className="auth-title">Welcome Back</h2>
              <div className="form-group">
                <input
                  type="text"
                  className="form-input"
                  placeholder="Username"
                  name="username"
                  onChange={handleChange}
                  required
                />
                <input
                  type="password"
                  className="form-input"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="form-button">
                Login
              </button>
            </form>
          ) : (
            <form onSubmit={handleRegister} className="authForm">
              <h2 className="auth-title">Create an account</h2>
              <div className="form-group">
                <input
                  type="text"
                  className="form-input"
                  placeholder="Full name"
                  required
                  name="fullname"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  className="form-input"
                  placeholder="Username"
                  required
                  name="username"
                  onChange={handleChange}
                />
                <input
                  type="email"
                  className="form-input"
                  placeholder="Email"
                  required
                  name="email"
                  onChange={handleChange}
                />
                <input
                  type="password"
                  className="form-input"
                  placeholder="Password"
                  required
                  name="password"
                  onChange={handleChange}
                />
                <input
                  type="password"
                  className="form-input"
                  placeholder="Confirm Password"
                  required
                  name="confirm_password"
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="form-button">
                Sign Up
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
