import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../../hooks/useCart";
// import logo from '../../../assets/images/logo.jpg';


const Navbar = () => {

    const { user, logOut } = useAuth();
    const [cart] = useCart();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navOptions = <>
        < li className="font-bold"> <Link to='/'>Home</Link></li>
        < li className="font-bold"> <Link to='/instructors'>Instructors</Link></li>
        < li className="font-bold"> <Link to='/classes'>Classes</Link></li>
        < li className="font-bold"> <Link to='/aboutUs'>About Us</Link></li>
        < li className="font-bold"> <Link to='/secret'>Secret</Link></li>
    </>

    return (
        <div>
            <div className="navbar bg-emerald-100 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    {/* <Link to='/'><img className=" rounded-sm h-12 w-24" src={logo} alt="" /></Link> */}
                    <Link to='/'><h3 className="text-3xl font-semibold">AxiomTune</h3></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <>

                                <div className="mr-3">
                                    <Link to='/dashboard/myCart'>
                                        <button className="btn">
                                            <FaShoppingCart className="text-2xl"></FaShoppingCart>
                                            <div className="badge badge-secondary">{'+' + cart?.length || 0}</div>
                                        </button>
                                    </Link>
                                </div>

                                <div className="avatar">
                                    <div className="w-12 rounded-xl mr-3">
                                        <img src={user?.photoURL}></img>
                                    </div>
                                </div>

                                <button onClick={handleLogOut} className="btn btn-primary">Logout</button>

                            </>
                            :
                            <>
                                <Link to='/login'><button className="btn btn-primary">Login</button>
                                </Link>
                            </>
                    }
                </div>
            </div>
        </div >
    );
};

export default Navbar;