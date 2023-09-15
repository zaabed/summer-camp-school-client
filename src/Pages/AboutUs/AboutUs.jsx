

const AboutUs = () => {
    return (
        <div>
            <h3 className="text-3xl">This is About Us Page</h3>

            <div className="mt-20">
                <h3 className="text-5xl font-extrabold text-center mb-10">Contact Us</h3>

                <div className=" grid sm:grid-cols-1 lg:grid-cols-4 gap-10 justify-center">

                    <div>
                        <div className="card w-96 h-36 bg-base-100 shadow-xl ">
                            <div className="card-body text-center">
                                <h2 className="text-2xl font-bold">Address</h2>
                                <p>198 West 21th Street, Suite <br /> 721 New York NY 10016</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card w-96 h-36 bg-base-100 shadow-xl ">
                            <div className="card-body text-center">
                                <h2 className="text-2xl font-bold">Contact Number</h2>
                                <p>+ 1235 2355 98</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card w-96 h-36 bg-base-100 shadow-xl ">
                            <div className="card-body text-center">
                                <h2 className="text-2xl font-bold">Email Address</h2>
                                <p>info@yoursite.com</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card w-96 h-36 bg-base-100 shadow-xl ">
                            <div className="card-body text-center">
                                <h2 className="text-2xl font-bold">Website</h2>
                                <p>AxiomTune. School</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="grid sm:grid-cols-1 lg:grid-cols-2 mt-20 p-5">
                    <div>
                        <img className="rounded-md" src="https://crosstalk.cell.com/hs-fs/hubfs/Images/Alex%20Lenkei/An%20authors%20guide%20to%20copyediting%20queries/query-letter-featured.jpg?width=1000&name=query-letter-featured.jpg" alt="Album" />
                    </div>
                    <div className="mx-auto">
                        <div className="form-control w-full max-w-xs ">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                <span className="label-text"> Your Email</span>
                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                <span className="label-text">Subject</span>
                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea placeholder="Bio" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>


                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutUs;