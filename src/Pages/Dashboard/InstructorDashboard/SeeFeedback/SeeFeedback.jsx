import { useLoaderData } from "react-router-dom";



const SeeFeedback = () => {

    const feedback = useLoaderData();
    console.log(feedback);

    return (
        <div>
            <h1 className="text-4xl font-4xl font-extrabold text-red-700">COURSE DENIED REASON DETAILS</h1>
        </div>
    );
};

export default SeeFeedback;