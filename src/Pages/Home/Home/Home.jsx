import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularTeachers from "../PopularTeachers/PopularTeachers";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularTeachers></PopularTeachers>
        </div>
    );
};

export default Home;