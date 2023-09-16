import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const UpdateCourseStatus = () => {

    const [axiosSecure] = useAxiosSecure();
    const courseStatus = useLoaderData();
    const { name, price, seats, status, _id, instructor, email, image } = courseStatus;

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {

        const { email, image, instructor, name, price, seats, status } = data;
        const updateStatus = { status: status, email: email, image: image, instructor: instructor, name: name, price: price, seats: seats };
        console.log(updateStatus);

        //approved courses store database
        axiosSecure.post('/approvedCourses', updateStatus)
            .then(data => {
                if (data.data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Approved Courses Store On Database Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })


        //courses pending status updated
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


            <h1 className="text-4xl font-bold uppercase">Approved Course Info And Update Course Status</h1>


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
                            <input defaultValue={instructor} type="text" placeholder="instructorName"
                                {...register("instructor", { required: true })}
                                className="input input-bordered w-full " />
                        </div>

                        <div className="form-control w-full ml-4">
                            <label className="label">
                                <span className="label-text font-semibold">Instructor email*</span>
                            </label>
                            <input defaultValue={email} type="text" placeholder="instructorEmail"
                                {...register("email", { required: true })}
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

                    <div className="mt-10 mb-5">
                        <h5 className="text-2xl font-bold">UPDATE COURSE STATUS</h5>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Status*</span>
                            </label>
                            <input defaultValue={status} type="text" placeholder="Status"
                                {...register("status", { required: true })}
                                className="input input-bordered w-1/2  " />
                        </div>
                    </div>

                    <input className="btn btn-sm mt-4 mx-auto" type="submit" value="Update Status" />
                </form>
            </div>

        </div>
    );
};

export default UpdateCourseStatus;