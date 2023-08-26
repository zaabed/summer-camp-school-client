import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../../hooks/useCart";
import useAuth from "../../../../hooks/useAuth";
import { Link } from "react-router-dom";


const MyCart = () => {

    const [cart] = useCart();
    const { user } = useAuth();

    const handleDelete = (item) => {
        console.log('delete', item._id)
    }

    return (
        <div>

            <h1 className="text-3xl font-bold text-center uppercase mt-2">Here All Selected Courses</h1>

            <div className="mt-10 mb-10">
                <h3 className="text2xl text-center">Name:{user?.displayName} Email:{user?.email}</h3>
            </div>

            <div className="uppercase flex justify-evenly font-semibold mb-10">
                <h3 className="text-3xl">Total Orders:{cart.length}</h3>
                <h3 className="text-3xl">Total Price:</h3>
                <Link to="/dashboard/payment">
                    <button className="btn btn-warning btn-sm">PAY</button>
                </Link>
            </div>

            <div className="overflow-x-auto w-full">
                <table className="table">

                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Courses Name</th>
                            <th>Instructor Name</th>
                            <th>available_seats</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item, index) => <tr

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
                            <td>
                                <p className="font-bold">{item.name}</p>
                            </td>
                            <td><p className="font-bold">{item.instructor}</p></td>
                            <td><p className="font-bold">{item.available_seats}</p></td>
                            <td><p className="font-bold">${item.price}</p></td>
                            <td>
                                <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-600 text-white"><FaTrashAlt></FaTrashAlt></button>
                            </td>
                        </tr>)}

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyCart;