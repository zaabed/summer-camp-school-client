import { useForm } from "react-hook-form";
import useAuth from "../../../../hooks/useAuth";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";



const UpdateClass = () => {

    const updateClass = useLoaderData();
    const { _id, name, price, seats, image } = updateClass;
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit } = useForm();
    const { user } = useAuth();

    const onSubmit = data => {

        const { name, price, seats } = data;
        const updateClass = { name: name, seats: parseFloat(seats), price: parseFloat(price) };
        console.log(updateClass);
        axiosSecure.put(`/instructorCourses/${_id}`, updateClass)
            .then(data => {
                if (data.data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'class Updated Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    }

    return (
        <div className="w-full p-10">
            <h1 className="text-3xl font-semibold">Update a Class</h1>

            <div className="mt-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Class Name*</span>
                        </label>
                        <input defaultValue={name} type="text" placeholder="Class Name"
                            {...register("name", { required: true })}
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
                            <input defaultValue={seats} type="text" placeholder="availableSeats"
                                {...register("seats", { required: true })}
                                className="input input-bordered w-full " />
                        </div>

                        <div className="form-control w-full ml-4">
                            <label className="label">
                                <span className="label-text font-semibold">Price*</span>
                            </label>
                            <input defaultValue={price} type="text" placeholder="price"
                                {...register("price", { required: true })}
                                className="input input-bordered w-full " />
                        </div>

                        <div className="form-control w-full ml-4">
                            <label className="label">
                                <span className="label-text font-semibold">Photo URL*</span>
                            </label>
                            <input defaultValue={image} type="text" placeholder="Photo URL"
                                {...register("image", { required: true })}
                                className="input input-bordered w-full " />
                        </div>

                    </div>

                    <input className="btn btn-sm mt-4" type="submit" value="Update Class" />
                </form>
            </div>
        </div>
    );
};

export default UpdateClass;