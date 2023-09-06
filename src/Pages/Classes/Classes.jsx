import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import ShowCourses from "./ShowCourses";


const Classes = () => {

    const [axiosSecure] = useAxiosSecure();

    const { data: classes = [] } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/classes');
        return res.data;
    })

    return (
        <div className="mt-20">
            <h1 className="text-4xl text-center font-bold uppercase">Our Courses</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-y-24  mt-5">
                {
                    classes.map(cls => <ShowCourses

                        key={cls._id}
                        cls={cls}

                    ></ShowCourses>)
                }
            </div>
        </div>
    );
};

export default Classes;