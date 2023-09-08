import { Link, Outlet } from "react-router-dom";
import { FaHome } from 'react-icons/fa';
import useInstructors from "../hooks/useInstructors";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";


const Dashboard = () => {

    const { user } = useAuth();

    // const isAdmin = true;
    const [isAdmin] = useAdmin();
    // const isInstructor = true;
    const [isInstructor] = useInstructors();


    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">

                {/* <h1 className="text-4xl font-bold">Welcome To Dashboard</h1> */}
                {/* Page content here */}
                <Outlet></Outlet>

                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden mt-20">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">

                    {/* Sidebar content here */}


                    <div className="mb-10">
                        <Link className="text-center" to='/'><span className="font-bold text-4xl">AxiomTune.</span> <span className="font-bold">School</span></Link>
                    </div>



                    <div className="mb-7 mx-auto">
                        <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                            <p className="font-semibold mb-1">{user?.email}</p>
                            <div className="avatar">
                                <div className="avatar">
                                    <div className="w-28 rounded-xl">
                                        <img src={user?.photoURL} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="flex flex-col w-full border-opacity-50 ">
                        <div className="grid gap-y-2 p-10 card bg-base-300 rounded-box place-items-center">

                            {/* USE NESTED TERNARY OPERATOR */}

                            {
                                isAdmin ?
                                    <>

                                        <li ><Link className="border border-sky-500 px-10 rounded-lg p-2 pe-10 " to='/dashboard/adminHome'>Admin Home</Link></li>
                                        <li ><Link className="border border-sky-500 px-10 rounded-lg p-2 pe-10 " to='/dashboard/allUsers'>Manage Users</Link></li>
                                        <li ><Link className="border border-sky-500 px-10 rounded-lg p-2 pe-10 " to='/dashboard/manageClasses'>Manage Classes</Link></li>

                                    </> : isInstructor ?
                                        <>

                                            <li ><Link className="border border-sky-500 px-10 rounded-lg p-2 pe-10 " to='/dashboard/instructorHome'>Instructor Home</Link></li>
                                            <li ><Link className="border border-sky-500 px-10 rounded-lg p-2 pe-10 " to='/dashboard/addClass'>Add a Class</Link></li>
                                            <li ><Link className="border border-sky-500 px-10 rounded-lg p-2 pe-10 " to='/dashboard/myClasses'>My Classes</Link></li>

                                        </> :
                                        <>

                                            <li ><Link className="border border-sky-500 px-10 rounded-lg p-2 pe-10 " to='/dashboard/userHome'>Student Dashboard</Link></li>
                                            <li ><Link className="border border-sky-500 px-10 rounded-lg p-2 pe-10 " to='/dashboard/myCart'> Selected Classes</Link></li>

                                        </>
                            }

                        </div>


                        <div className="divider">OR</div>


                        <div className="grid gap-y-2 p-10 card bg-base-300 rounded-box place-items-center">

                            <li ><Link className="border border-sky-500 px-10 rounded-lg p-2 pe-10 " to='/'><FaHome></FaHome>Home</Link></li>
                            <li ><Link className="border border-sky-500 px-10 rounded-lg p-2 pe-10 " to='/classes'><FaHome></FaHome>All Classes</Link></li>
                            <li ><Link className="border border-sky-500 px-10 rounded-lg p-2 pe-10 " to='/instructors'><FaHome></FaHome>All Instructors</Link></li>
                            <li ><Link className="border border-sky-500 px-10 rounded-lg p-2 pe-10 " to='/aboutUs'><FaHome></FaHome>About Us</Link></li>

                        </div>
                    </div>



                </ul>

            </div>
        </div>
    );
};

export default Dashboard;