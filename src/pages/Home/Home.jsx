import Banner from "./Banner";
import HotJobs from "./HotJobs";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="max-w-7xl mx-auto">
                <HotJobs></HotJobs>
            </div>
            
        </div>
    );
};

export default Home;