import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";


const ManageClasses = () => {

    const [axiosSecure] = useAxiosSecure();

    const { data: allClasses = [] } = useQuery(['instructorCourses'], async () => {
        const res = await axiosSecure.get('/instructorCourses');
        return res.data;
    })

    return (
        <div className="w-full P-10">

            <h1 className="text-3xl font-semibold">Show All Classes</h1>

            <div className="mt-5">
                <table className="table table-xs">

                    <thead>
                        <tr>
                            <th>#</th>
                            <th> Class Image</th>
                            <th> Class name</th>
                            <th>Instructor name</th>
                            <th>Instructor email</th>
                            <th>Available seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                            <th>Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allClasses.map((item, index) => <tr

                            key={item._id}

                        >
                            <td>{index + 1}</td>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>{item.name}</td>
                            <td>{item.instructor}</td>
                            <td>{item.email}</td>
                            <td>{item.seats}</td>
                            <td>{item.price}</td>
                            <td>
                                <div className="btn-group">
                                    <button className="btn btn-sm bg-pink-500 text-white">{item.status}</button>
                                </div>
                            </td>
                            <td>
                                <div className="btn-group">



                                    <Link to={`/dashboard/updateClassStatus/${item._id}`}>
                                        <button className="btn btn-sm bg-yellow-600 text-white">APPROVE</button>
                                    </Link>

                                    <Link to={`/dashboard/denyClassStatus/${item._id}`}>
                                        <button className="btn btn-sm bg-yellow-600 text-white">DENY</button>
                                    </Link>



                                </div>
                            </td>

                            <td>
                                <div className="btn-group">
                                    <Link to='/dashboard/adminFeedback'>
                                        <button className="btn btn-sm bg-yellow-600 text-white">FEEDBACK</button>
                                    </Link>
                                </div>
                            </td>

                        </tr>)}

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageClasses;