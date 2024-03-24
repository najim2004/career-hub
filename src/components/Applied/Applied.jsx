import bg1 from '../../assets/images/bg1.png';
import bg2 from '../../assets/images/bg2.png';
import {useLoaderData } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getStoredJobApplication } from '../../Utility/localStorage';
import AppliedJobs from '../AppliedJobs/AppliedJobs';
const Applied = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [FilterJob, setFilterJob] = useState([]);
    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {
            const appliedJobs = jobs.filter(job => storedJobIds.includes(job.id))
            setAppliedJobs(appliedJobs);
            setFilterJob(appliedJobs);
        }
    }, [])
    const handleFilter=(e) => {
       if(e.target.value==='All'){
        setFilterJob(appliedJobs);
       }
       else if(e.target.value==='Remote'){
        setFilterJob(appliedJobs.filter(job=>job.remote_or_onsite ==='Remote'));
       }
       else if(e.target.value==='Onsite'){
        setFilterJob(appliedJobs.filter(job=>job.remote_or_onsite ==='Onsite'));
       }
    };
    return (
        <div className='mb-[130px]'>
            <div className="mb-[130px]  relative h-[218px] flex justify-center items-center bg-gray-50">
                <img className="w-[350px] h-[218px] absolute bottom-0 left-0" src={bg1} alt="" />
                <h3 className="text-[32px] font-extrabold text-center">Applied Jobs</h3>
                <img className="absolute  right-0 -top-[80%] w-[297px]" src={bg2} alt="" />
            </div>
            <div className="max-w-[1320px] mx-auto">
                <div className="flex justify-end mb-8">
                    <select onChange={handleFilter} className="select text-xl font-semibold bg-[#F4F4F4] border-none rounded-lg max-w-xs">
                        <option disabled selected>Filter</option>
                        <option>All</option>
                        <option>Remote</option>
                        <option>Onsite</option>
                    </select>
                </div>
                <div className="flex flex-col gap-6">

                    {
                        FilterJob.map(job => <AppliedJobs key={job.id} job={job}></AppliedJobs>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Applied;