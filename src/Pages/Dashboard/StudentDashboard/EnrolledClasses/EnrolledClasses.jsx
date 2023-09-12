import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";


const EnrolledClasses = () => {


    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: enrolledCourses = [] } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/payments?email=${user?.email}`);
            return res.data;
        }
    })

    return (

        <div className="w-full p-10">

            <h1 className="text-3xl font-bold text-center uppercase mt-2">Here All Enrolled Classes </h1>

            <div className="overflow-x-auto w-full">
                <table className="table">

                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Courses Name</th>
                            <th>Instructor Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {enrolledCourses.map((item, index) => <tr

                            key={item._id}

                        >
                            <td>{index + 1}</td>
                            <td>

                                <div className="flex items-center space-x-3">
                                    {
                                        item.cart.map(cls => <div key={cls._id} className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={cls.image} alt="Avatar Tailwind CSS Component" />
                                            </div><br />
                                        </div>)
                                    }

                                </div>
                            </td>
                            <td>
                                {
                                    item.cart.map(cls => <p key={cls._id}><b>{cls.name}</b></p>)
                                }
                            </td>
                            <td>
                                {
                                    item.cart.map(cls => <ul key={cls._id}><b>{cls.instructor}</b></ul>)
                                }
                            </td>
                            <td><p className="font-bold">${item.price}</p></td>

                        </tr>)}

                    </tbody>

                </table>
            </div>
        </div>

    );
};

export default EnrolledClasses;