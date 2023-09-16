import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularTeachers from "../PopularTeachers/PopularTeachers";
import Reviews from "../Reviews/Reviews";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularTeachers></PopularTeachers>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;