import useClasses from "../../hooks/useClasses";
import ShowCourses from "./ShowCourses";


const Classes = () => {

    const [classes] = useClasses();

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