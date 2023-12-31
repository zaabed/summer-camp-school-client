import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";


const MyClasses = () => {

    //RECEIVE ALL INSTRUCTOR COURSES
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: instructorClasses = [] } = useQuery({
        queryKey: ['myCourses', user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/myCourses?email=${user?.email}`);
            return res.data;
        }
    })


    return (
        <div className="w-full p-10">

            <h1 className="text-3xl font-semibold">Show My Classes</h1>

            <div>
                <table className="table">

                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Course Name</th>
                            <th>Status</th>
                            <th>Enrolled Students</th>
                            <th>Feedback</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {instructorClasses.map((item, index) => <tr

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
                            <td><p className="font-bold">{item.name}</p></td>
                            <td>
                                <div className="btn-group">
                                    <button className="btn btn-sm bg-yellow-600 text-white">{item.status}</button>
                                </div>
                            </td>
                            <td><p className="font-bold">0 TODO</p></td>
                            <td>


                                <Link to={`/dashboard/instructorFeedback/${item._id}`}>
                                    <button className="btn btn-sm bg-yellow-600 text-white">SEE FEEDBACK</button>
                                </Link>



                            </td>
                            <td><Link to={`/dashboard/updateClass/${item._id}`}><button className="btn btn-ghost bg-yellow-600 text-white"><FaEdit></FaEdit></button></Link></td>

                        </tr>)}

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyClasses;


