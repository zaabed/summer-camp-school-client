import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
// import useAuth from "../../../../hooks/useAuth";


const UpdateCourseStatus = () => {

    // const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const courseStatus = useLoaderData();
    // console.log(courseStatus);
    // const { _id, status } = courseStatus;
    const { name, price, seats, status, _id, instructor, email } = courseStatus;

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        // console.log(data);

        const { email, image, instructor, name, price, seats, status } = data;
        const updateStatus = { status: status, email: email, image: image, instructor: instructor, name: name, price: price, seats: seats };
        console.log(updateStatus);
        axiosSecure.put(`/updateCoursesStatus/${_id}`, updateStatus)
            .then(data => {
                if (data.data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Course Status Updated Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }




            })

    }

    return (
        <div>
            {/* <h1 className="text-3xl font-semibold">Update Course Status</h1> */}

            {/* <div className="mt-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Course Status*</span>
                        </label>
                        <input defaultValue={status} type="text" placeholder="Course Status"
                            {...register("status", { required: true })}
                            className="input input-bordered w-full " />
                    </div>

                    <input className="btn btn-sm mt-4" type="submit" value="Status Update" />

                </form>
            </div> */}


            <h1 className="text-3xl font-semibold">Approved Course Info And Update Course Status</h1>

            {/* <div className="mt-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Class Name*</span>
                        </label>
                        <input defaultValue={name} disabled type="text" placeholder="Class Name"
                            {...register("name", { required: true })}
                            className="input input-bordered w-full " />
                    </div>

                    <div className="flex">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text font-semibold">Instructor name*</span>
                            </label>
                            <input defaultValue={user?.displayName} disabled type="text" placeholder="instructorName"
                                {...register("instructor", { required: true })}
                                className="input input-bordered w-full " />
                        </div>

                        <div className="form-control w-full ml-4">
                            <label className="label">
                                <span className="label-text font-semibold">Instructor email*</span>
                            </label>
                            <input disabled defaultValue={user?.email} type="text" placeholder="instructorEmail"
                                {...register("email", { required: true })}
                                className="input input-bordered w-full " />
                        </div>
                    </div>
                    <div className="flex">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text font-semibold">Available seats*</span>
                            </label>
                            <input disabled defaultValue={seats} type="text" placeholder="availableSeats"
                                {...register("seats", { required: true })}
                                className="input input-bordered w-full " />
                        </div>

                        <div className="form-control w-full ml-4">
                            <label className="label">
                                <span className="label-text font-semibold">Price*</span>
                            </label>
                            <input defaultValue={price} disabled type="text" placeholder="price"
                                {...register("price", { required: true })}
                                className="input input-bordered w-full " />
                        </div>

                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text font-semibold">Course Status*</span>
                            </label>
                            <input defaultValue={status} type="text" placeholder="Course Status"
                                {...register("status", { required: true })}
                                className="input input-bordered w-full " />
                        </div>

                    </div>



                    <input className="btn btn-sm mt-4" type="submit" value="Update Status" />
                </form>
            </div> */}

            <div className="mt-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Class Name*</span>
                        </label>
                        <input defaultValue={name} disabled type="text" placeholder="Class Name"
                            {...register("name", { required: true })}
                            className="input input-bordered w-full " />
                    </div>

                    <div className="flex">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text font-semibold">Instructor name*</span>
                            </label>
                            <input defaultValue={instructor} disabled type="text" placeholder="instructorName"
                                {...register("instructor", { required: true })}
                                className="input input-bordered w-full " />
                        </div>

                        <div className="form-control w-full ml-4">
                            <label className="label">
                                <span className="label-text font-semibold">Instructor email*</span>
                            </label>
                            <input defaultValue={email} disabled type="text" placeholder="instructorEmail"
                                {...register("email", { required: true })}
                                className="input input-bordered w-full " />
                        </div>
                    </div>
                    <div className="flex">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text font-semibold">Available seats*</span>
                            </label>
                            <input defaultValue={seats} disabled type="text" placeholder="availableSeats"
                                {...register("seats", { required: true })}
                                className="input input-bordered w-full " />
                        </div>

                        <div className="form-control w-full ml-4">
                            <label className="label">
                                <span className="label-text font-semibold">Price*</span>
                            </label>
                            <input defaultValue={price} disabled type="text" placeholder="price"
                                {...register("price", { required: true })}
                                className="input input-bordered w-full " />
                        </div>

                        <div className="form-control w-full ml-4">
                            <label className="label">
                                <span className="label-text font-semibold">Status*</span>
                            </label>
                            <input defaultValue={status} type="text" placeholder="Status"
                                {...register("status", { required: true })}
                                className="input input-bordered w-full " />
                        </div>

                    </div>



                    <input className="btn btn-sm mt-4" type="submit" value="Update Status" />
                </form>
            </div>

        </div>
    );
};

export default UpdateCourseStatus;