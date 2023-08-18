import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


const SignUp = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
    };

    return (
        <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
            <div className="md:w-1/3 max-w-sm">
                <img
                    src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                    alt="Sample image" />
            </div>
            <div className="md:w-1/3 max-w-sm">
                <h3 className="mb-5 font-bold">Please Sign Up</h3>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded" type="text" {...register("name", { required: true })} name="name" placeholder="name" />
                        {errors.name && <span className="text-red-600">This field is required</span>}
                    </div>

                    <div>
                        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="text" {...register("email", { required: true })} name="email" placeholder="Email Address" />
                        {errors.name && <span className="text-red-600">This field is required</span>}
                    </div>

                    <div>
                        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="password" {...register("password", {
                            required: true,
                            minLength: 6,
                            maxLength: 20,
                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                        })} name="password" placeholder="Password" />

                        {errors.password?.type === 'required' && <span className="text-red-600">Password is required</span>}

                        {errors.password?.type === 'minLength' && <span className="text-red-600">Password must be 6 characters</span>}

                        {errors.password?.type === 'maxLength' && <span className="text-red-600">Password must be less than 20 characters</span>}

                        {errors.password?.type === 'pattern' && <span className="text-red-600">Password must have one upper case, one lower case, one special characters and number</span>}

                    </div>

                    {/* <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="password" placeholder="Confirm Password" /> */}

                    <div>
                        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="text" {...register("photoURL", { required: true })} placeholder="Photo URL" />
                        {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                    </div>


                    <div className="text-center md:text-left">
                        <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit">Sign Up</button>
                    </div>
                </form>

                <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
                    Already have an account? <Link to='/login' className="text-black hover:underline hover:underline-offset-4">Login</Link>
                </div>
            </div>
        </section>
    );
};

export default SignUp;