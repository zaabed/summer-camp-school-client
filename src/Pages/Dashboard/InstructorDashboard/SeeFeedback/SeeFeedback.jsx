import { useLoaderData } from "react-router-dom";



const SeeFeedback = () => {

    const feedback = useLoaderData();
    console.log(feedback);



    return (
        <div>
            <h1 className="text-4xl font-4xl font-extrabold text-red-700 mb-10 text-center">COURSE DENIED REASON DETAILS</h1>

            <div className="card w-3/4 bg-red-500 text-primary-content mx-auto ">
                <div className="card-body">
                    <p className="text-white font-extrabold text-2xl">{feedback.feedback}</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SeeFeedback;