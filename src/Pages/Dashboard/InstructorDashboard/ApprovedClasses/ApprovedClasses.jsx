import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";


const ApprovedClasses = () => {

    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: approvedClasses = [] } = useQuery({
        queryKey: ['myApprovedCourses', user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/myApprovedCourses?email=${user?.email}`);
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
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {approvedClasses.map((item, index) => <tr

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

                            <td><Link to={`/dashboard/updateApprovedClass/${item._id}`}><button className="btn btn-ghost bg-yellow-600 text-white"><FaEdit></FaEdit></button></Link></td>

                        </tr>)}

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ApprovedClasses;