import { useQuery } from "@tanstack/react-query";
import ShowInstructors from "./ShowInstructors";


const Instructors = () => {

    const { data: instructors = [] } = useQuery({
        queryKey: ['teachers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/teachers');
            return res.json();
        }
    })

    return (
        <div className="mt-20">
            <h1 className="text-4xl text-center font-bold uppercase">Certified Teachers</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-y-24  mt-5">
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