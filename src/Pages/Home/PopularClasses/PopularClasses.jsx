// import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import ShowClasses from "./ShowClasses";


const PopularClasses = () => {

    // const [classes, setClasses] = useState();

    // useEffect(() => {
    //     fetch('http://localhost:5000/classes')
    //         .then(res => res.json())
    //         .then(data => {
    //             setClasses(data);
    //         })
    // }, [])

    const [axiosSecure] = useAxiosSecure();

    const { data: classes = [] } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/classes')
        return res.data;
    })

    return (
        <div className="mt-10">
            <h1 className="text-4xl text-center font-bold uppercase">Our Courses</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-y-24  mt-5">
                {classes &&
                    classes.map(cls => <ShowClasses
                        key={cls._id}
                        cls={cls}
                    ></ShowClasses>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;