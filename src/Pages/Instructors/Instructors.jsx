import { useQuery } from "@tanstack/react-query";
import ShowInstructors from "./ShowInstructors";


const Instructors = () => {

    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            return res.json();
        }
    })

    const instructors = users.filter(instructor => instructor.role === 'instructor');

    return (
        <div className="mt-0">
            <h1 className="text-4xl text-center font-bold uppercase">Certified Teachers</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-y-24  mt-20">

                {
                    instructors.map(instr => <ShowInstructors

                        key={instr._id}
                        instr={instr}

                    ></ShowInstructors>)
                }

            </div>
        </div>
    );
};

export default Instructors;