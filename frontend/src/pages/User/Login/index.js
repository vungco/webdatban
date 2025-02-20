import React, { useState } from "react";
import authUser from "../../../api/authUser";
import { useNavigate } from 'react-router-dom';


const Login = ({ isVisible, onClose }) => {
    const [isRightPanelActive, setRightPanelActive] = useState(false);
    const [email,setEmail] = useState(); 
    const [password,setPassword] = useState(); 
    const [name,setName] = useState(); 
    const navigate = useNavigate();


    const handleSignUpClick = () => {
        setRightPanelActive(true);
    };

    const handleSignInClick = () => {
        setRightPanelActive(false);
    };
    // if (!isVisible) {
    //     return null;
    // }

    function HandleLogin(e){
        e.preventDefault();
        const data = {
            email,
            password,
        }
        authUser.login(data)
            .then(response=>{
                localStorage.setItem('token',response.token);
                HandleCheckRole(response.data.role)
            })
            .catch(error=>{
                console.error('Có lỗi khi đăng nhập '+error+'-'+error.response.data.message)
            })
    }

    function HandleCheckRole(role){
        if(role=='user'){
            navigate('/');
        }else{
            navigate('/Admin/Home');
        }
    }

    function HandleRegester(e){
        e.preventDefault();
        const data = {
            name,
            email,
            password,
        }
        authUser.regester(data)
            .then(response=>{
                alert('chúc mừng bạn đã đăng ký thành công');
                setRightPanelActive(false);
                setName();
                setEmail();
                setPassword();
            })
            .catch(error=>{
                console.error('Có lỗi khi đăng ký '+error+'-'+error.response.data.message)
            })
    }
    return (
        <div style={{height:'420px'}}>
            {/* Lớp phủ mờ */}
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    zIndex: 999,
                }}
                onClick={onClose}
            ></div>
            <div className='login-container'>
                <div
                    className={`container1 ${isRightPanelActive ? "right-panel-active" : ""}`}
                    id="container"
                >
                    <div className="form-container sign-up-container">
                        <form action="#">
                            <h1>Create Account</h1>
                            <div className="social-container">
                                <a href="#" className="social"><img src="https://coachingskills.vn/wp-content/uploads/2024/07/facebook-logo-icon-facebook-icon-png-images-icons-and-png-backgrounds-1.png" alt /></a>
                                <a href="#" className="social"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png" alt /></a>

                            </div>
                            <span>or use your email for registration</span>
                            <input type="text" placeholder="Name" onChange={(e)=>(setName(e.target.value))} />
                            <input type="email" placeholder="Email" onChange={(e)=>(setEmail(e.target.value))} />
                            <input type="password" placeholder="Password" onChange={(e)=>(setPassword(e.target.value))} />
                            <button onClick={(e)=>{HandleRegester(e)}}>Sign Up</button>
                        </form>
                    </div>
                    <div className="form-container sign-in-container">
                        <form action="">
                            <h1>Sign in</h1>
                            <div className="social-container">
                                <a href="#" className="social"><img src="https://coachingskills.vn/wp-content/uploads/2024/07/facebook-logo-icon-facebook-icon-png-images-icons-and-png-backgrounds-1.png" alt /></a>
                                <a href="#" className="social"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png" alt /></a>

                            </div>
                            <span>or use your account</span>
                            <input type="email" placeholder="Email" onChange={(e)=>(setEmail(e.target.value))}/>
                            <input type="password" placeholder="Password" onChange={(e)=>(setPassword(e.target.value))}/>
                            <a href="#">Forgot your password?</a>
                            <button onClick={(e)=>{HandleLogin(e)}}>Sign In</button>
                        </form>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay2">
                            <div className="overlay-panel overlay-left">
                                <h1>Welcome Back!</h1>
                                <p>To keep connected with us please login with your personal info</p>
                                <button className="ghost" id="signIn" onClick={handleSignInClick}>Sign In</button>
                            </div>
                            <div className="overlay-panel overlay-right">
                                <h1>Hello, Friend!</h1>
                                <p>Enter your personal details and start journey with us</p>
                                <button className="ghost" id="signUp" onClick={handleSignUpClick}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login