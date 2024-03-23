import Banner from "../Banner/Banner";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import JobCategory from "../JobCategory/JobCategory";

const Home = () => {
    return (
        <div className="">
            <div className="bg-[linear-gradient(90deg,rgba(126,144,254,0.05)0%,rgba(152,115,255,0.05)100%)]">
                <Banner></Banner>
            </div>
            <JobCategory></JobCategory>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;