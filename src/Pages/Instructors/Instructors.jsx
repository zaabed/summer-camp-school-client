import useInstructors from "../../hooks/useInstructors";
import ShowInstructors from "./ShowInstructors";


const Instructors = () => {

    const [instructors] = useInstructors();

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