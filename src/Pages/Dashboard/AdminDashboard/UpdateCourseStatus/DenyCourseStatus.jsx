import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const DenyCourseStatus = () => {

    const { register, handleSubmit } = useForm();
    const courseStatus = useLoaderData();
    const { _id, status } = courseStatus;
    const [axiosSecure] = useAxiosSecure();

    const onSubmit = data => {
        console.log(data);

        const { status, feedback } = data;
        const updateStatus = { status: status, feedback: feedback };

        axiosSecure.put(`/denyCoursesStatus/${_id}`, updateStatus)
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
            <h1 className="text-3xl font-semibold uppercase">Denied Course Status</h1>

            <div className="mt-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Course Status*</span>
                        </label>
                        <input defaultValue={status} type="text" placeholder="Course Status"
                            {...register("status", { required: true })}
                            className="input input-bordered w-full " />
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Denied Reason*</span>
                        </label>
                        <textarea placeholder="Denied Reason"  {...register("feedback", { required: true })} className=" textarea textarea-bordered textarea-lg w-full " ></textarea>
                    </div>

                    <input className="btn btn-sm mt-4" type="submit" value="Status Update" />

                </form>
            </div>

        </div>
    );
};

export default DenyCourseStatus;