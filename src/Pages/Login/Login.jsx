import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle } from 'react-icons/fa';
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useState } from "react";


const Login = () => {

    const [error, setError] = useState('');
    const { googleSignIn, githubSignIn, signIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);

                const saveUser = { name: loggedUser.displayName, email: loggedUser.email };

                fetch('https://summer-school-camp-server-sage.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
            })
            .catch(error => console.log(error));
    }

    const handleGithubLogin = () => {
        githubSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `Github Login Successfully`,
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true });
            })
            .catch(error => console.log(error));
    }

    const handleLogin = event => {
        event.preventDefault();
        setError('');
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `Login Successfully`,
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate('/');
            })
            .catch(error => {
                setError(error.message);
            })
    }

    return (
        <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
            <div className="md:w-1/3 max-w-sm">
                <img
                    src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                    alt="Sample image" />
            </div>
            <div className="md:w-1/3 max-w-sm">
                <div className="text-center md:text-left">
                    <label className="mr-1 font-semibold">Login with</label>
                    <button onClick={handleGoogleLogin} className="btn btn-square btn-outline">
                        <FaGoogle></FaGoogle>
                    </button>
                    <button onClick={handleGithubLogin} className="btn btn-square btn-outline ms-2">
                        <FaGithub></FaGithub>
                    </button>
                </div>
                <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                    <p className="mx-4 mb-0 text-center font-semibold text-slate-500">Or</p>
                </div>

                <form onSubmit={handleLogin}>
                    <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="text" name="email" placeholder="Email Address" required />

                    <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="password" name="password" placeholder="Password" required />

                    {
                        error &&
                        <div className="alert alert-error mt-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span>{error}</span>
                        </div>
                    }

                    <div className="text-center md:text-left">
                        <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit">Login</button>
                    </div>

                </form>

                <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
                    Dont have an account? <Link to='/signUp' className="text-black hover:underline hover:underline-offset-4">Sign Up</Link>
                </div>
            </div>
        </section>
    );
};

export default Login;