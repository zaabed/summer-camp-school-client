

const ShowClasses = ({ cls }) => {

    const { image, name, instructor, available_seats, price } = cls;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className="h-96 w-96" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold text-2xl">{name}</h2>
                <h6 className="font-bold ">Instructor: {instructor}</h6>
                <h6 className="font-bold">available Seats : {available_seats}</h6>
                <h6 className="font-bold">Price : ${price}</h6>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Enroll Now</button>
                </div>
            </div>
        </div>
    );
};

export default ShowClasses;