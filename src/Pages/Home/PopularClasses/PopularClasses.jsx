import { useEffect, useState } from "react";
import ShowClasses from "./ShowClasses";


const PopularClasses = () => {

    const [classes, setClasses] = useState();

    useEffect(() => {
        fetch('classes.json')
            .then(res => res.json())
            .then(data => {
                setClasses(data);
            })
    }, [])

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