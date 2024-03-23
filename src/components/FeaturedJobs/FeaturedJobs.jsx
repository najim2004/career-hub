import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);
    useEffect(() => {
        fetch('jobs.json')
            .then((res) => res.json())
            .then(data => setJobs(data));
    }, []);
    return (
        <div className="max-w-[1320px] mx-auto flex flex-col items-center mb-[130px]">
            <div className="w-full flex flex-col items-center mt-[130px]">
                <h3 className="text-[48px] mb-4 font-extrabold">Featured Jobs</h3>
                <p className="font-medium mb-8 text-center text-[#757575] max-w-[660px]">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-6 mb-10">
                {
                    jobs.slice(0, dataLength).map((job) => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={dataLength===jobs.length && 'hidden'}>
            <button onClick={()=>setDataLength(jobs.length)} className=" text-xl btn btn-sm font-extrabold text-white w-[174px] h-[65px] bg-gradient-to-r from-[#7E90FE] to-[#9873FF] rounded-[4px] ">See All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;