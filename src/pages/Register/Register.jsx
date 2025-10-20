import Lottie from "lottie-react";
import registerLottieData from "../../assets/lottie/register.json"
import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";

const Register = () => {

    const { createUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        createUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div className="hero bg-base-100 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                <div className="text-center lg:text-left w-96">

                    <Lottie animationData={registerLottieData}></Lottie>

                </div>
                <div className="card bg-base-300 w-full max-w-sm shadow-2xl">
                    <div className="card-body">
                        <h1 className="ml-8 mt-4 text-4xl font-bold">Register now!</h1>
                        <form onSubmit={handleRegister} className="form">
                            <label className="label">Email</label>
                            <input type="email" name="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" name="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn bg-white text-black mt-4">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;