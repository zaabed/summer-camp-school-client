import { useForm } from "react-hook-form";
import useAuth from "../../../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import './AddClass.css';

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;
// console.log(img_hosting_token)

const AddClass = () => {

    const [axiosSecure] = useAxiosSecure();
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

    const onSubmit = data => {
        console.log(data);

        const formData = new FormData;
        formData.append('image', data.image[0]);

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { className, instructorName, instructorEmail, availableSeats, price, status } = data;
                    const newItem = { name: className, instructor: instructorName, email: instructorEmail, seats: parseFloat(availableSeats), price: parseFloat(price), status: status, image: imgURL };
                    console.log(newItem);
                    axiosSecure.post('/instructorCourses', newItem)
                        .then(data => {
                            if (data.data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'class Added Successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })

    }

    return (
        <div className="w-full p-10 add-bg">
            <h1 className="text-3xl font-semibold">Add a Class</h1>

            <div className="mt-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Class Name*</span>
                        </label>
                        <input type="text" placeholder="Class Name"
                            {...register("className", { required: true })}
                            className="input input-bordered w-full " />
                    </div>

                    <div className="flex">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text font-semibold">Instructor name*</span>
                            </label>
                            <input defaultValue={user?.displayName} type="text" placeholder="instructorName"
                                {...register("instructorName", { required: true })}
                                className="input input-bordered w-full " />
                        </div>

                        <div className="form-control w-full ml-4">
                            <label className="label">
                                <span className="label-text font-semibold">Instructor email*</span>
                            </label>
                            <input defaultValue={user?.email} type="text" placeholder="instructorEmail"
                                {...register("instructorEmail", { required: true })}
                                className="input input-bordered w-full " />
                        </div>
                    </div>
                    <div className="flex">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text font-semibold">Available seats*</span>
                            </label>
                            <input type="text" placeholder="availableSeats"
                                {...register("availableSeats", { required: true })}
                                className="input input-bordered w-full " />
                        </div>

                        <div className="form-control w-full ml-4">
                            <label className="label">
                                <span className="label-text font-semibold">Price*</span>
                            </label>
                            <input type="text" placeholder="price"
                                {...register("price", { required: true })}
                                className="input input-bordered w-full " />
                        </div>

                        <div className="form-control w-full ml-4">
                            <label className="label">
                                <span className="label-text font-semibold">Status*</span>
                            </label>
                            <input defaultValue={'Pending'} type="text" placeholder="Status"
                                {...register("status", { required: true })}
                                className="input input-bordered w-full " />
                        </div>

                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Class Image*</span>
                        </label>
                        <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full max-w-xs" />
                    </div>

                    <input className="btn btn-sm mt-4" type="submit" value="Add Item" />
                </form>
            </div>
        </div>
    );
};

export default AddClass;