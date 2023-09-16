import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";


const ShowCourses = ({ cls }) => {

    const { image, name, instructor, seats, price, _id } = cls;
    const { user } = useAuth();
    const [, refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();


    const handleAddToCart = cls => {
        console.log(cls);
        if (user && user.email) {
            const orderCourseCartItem = { courseItemId: _id, seats, image, instructor, name, price, email: user.email };
            fetch('https://summer-school-camp-server-psi.vercel.app/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(orderCourseCartItem)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Course Added To Cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please Login Then Select The Course',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className="h-96 w-96" src={image} alt="Shoes" /></figure>
            <div className="card-body bg-orange-100">
                <div className="h-40 ">
                    <h2 className="card-title font-bold text-2xl">{name}</h2>
                    <h6 className="font-bold ">Instructor: {instructor}</h6>
                    <h6 className="font-bold">available Seats : {seats}</h6>
                    <h6 className="font-bold">Price : ${price}</h6>
                </div>
                <div className="card-actions justify-end">
                    <button onClick={() => handleAddToCart(cls)} className="btn btn-outline border-0 border-b-4 mt-4 bg-orange-300">Select</button>
                </div>
            </div>
        </div>
    );
};

export default ShowCourses;