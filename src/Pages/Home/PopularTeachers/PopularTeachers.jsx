// import { useEffect, useState } from "react";
import ShowTeachers from "./ShowTeachers";
import { useQuery } from "@tanstack/react-query";



const PopularTeachers = () => {

    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            return res.json();
        }
    })

    const instructors = users.filter(instructor => instructor.role === 'instructor');

    return (
        <div className="mt-20 mx-auto">
            <h1 className="text-4xl text-center font-bold uppercase mb-10">Certified Teachers</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3  gap-y-24 justify-items-center mt-10">

                {
                    instructors.map(instr => <ShowTeachers

                        key={instr._id}
                        instr={instr}

                    ></ShowTeachers>)
                }

            </div>


        </div>
    );
};

export default PopularTeachers;