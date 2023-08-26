import { useEffect, useState } from "react";
import ShowTeachers from "./ShowTeachers";


const PopularTeachers = () => {

    const [teachers, setTeachers] = useState();

    useEffect(() => {
        fetch('http://localhost:5000/teachers')
            .then(res => res.json())
            .then(data => {
                setTeachers(data);
            })
    }, [])

    return (
        <div className="mt-20">
            <h1 className="text-4xl text-center font-bold uppercase">Certified Teachers</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-y-24  mt-5">
                {teachers &&
                    teachers.map(teacher => <ShowTeachers

                        key={teacher._id}
                        teacher={teacher}

                    ></ShowTeachers>)
                }
            </div>
        </div>
    );
};

export default PopularTeachers;