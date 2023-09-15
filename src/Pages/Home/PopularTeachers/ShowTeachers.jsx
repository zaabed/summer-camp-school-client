

const ShowTeachers = ({ instr }) => {

    const { image, name, email } = instr;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className="h-96 w-96" src={image} alt="Shoes" /></figure>
            <div className="card-body bg-orange-100">
                <h2 className="card-title font-bold text-2xl">Name: {name}</h2>
                <h6 className="font-bold">Email : {email}</h6>
            </div>
        </div>
    );
};

export default ShowTeachers;