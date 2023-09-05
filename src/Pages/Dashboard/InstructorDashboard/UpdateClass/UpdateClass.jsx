import { useForm } from "react-hook-form";
import useAuth from "../../../../hooks/useAuth";


const UpdateClass = () => {

    const { register, handleSubmit } = useForm();
    const { user } = useAuth();

    const onSubmit = data => {
        console.log(data);
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

                    <input className="btn btn-sm mt-4" type="submit" value="Update Class" />
                </form>
            </div>
        </div>
    );
};

export default UpdateClass;