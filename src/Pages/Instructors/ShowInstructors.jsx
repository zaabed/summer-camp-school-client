

const ShowInstructors = ({ instr }) => {

    const { name, email, image } = instr;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className="h-96 w-96" src={image} /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold text-2xl">Name: {name}</h2>
                <h6 className="font-bold">Email : {email}</h6>
            </div>
        </div>
    );
};

export default ShowInstructors;