import Lottie from "lottie-react";
import signinLottieData from "../../assets/lottie/Login.json"
import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";



const Signin = () => {

    const { signInUser } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    console.log('in signin page:', location);

    const from = location.state || '/';

    const handleSignin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        signInUser(email, password)
            .then(result => {
                console.log('sign in',result.user);

                // const user = {email: result.user.email}

                // axios.post('http://localhost:3000/jwt', user, {withCredentials: true})
                // .then(res => {
                //     console.log(res.data);
                // })

                navigate(from);
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div className="hero bg-base-100 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse gap-10 ">
                <div className="text-center lg:text-left w-80">

                    <Lottie animationData={signinLottieData}></Lottie>

                </div>
                <div className="card bg-base-300 w-full max-w-sm shadow-2xl">
                    <div className="card-body">
                        <h1 className="ml-8 mt-4 text-4xl font-bold">Log In now!</h1>
                        <form onSubmit={handleSignin} className="form">
                            <label className="label">Email</label>
                            <input type="email" name="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" name="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn bg-white text-black mt-4">Log In</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;