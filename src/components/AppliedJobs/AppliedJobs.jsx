import PropTypes from 'prop-types';
import locationImg from '../../assets/icons/Location.png';
import dollar from '../../assets/icons/money.png';
import { Link } from 'react-router-dom';

const AppliedJobs = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (

        <div className="p-[30px] flex gap-8 items-center border-[1px] border-[#E8E8E8] rounded-lg">
            <div className="size-[240px] bg-[#F4F4F4] flex justify-center items-center rounded-lg">
                <img className='h-6' src={logo} alt="" />
            </div>
            <div className="flex justify-between items-center w-full">
                <div className="flex-grow">
                    <h2 className="text-2xl font-extrabold text-[#474747]">{job_title}</h2>
                    <p className="text-xl font-semibold text-[#757575] my-2">{company_name}</p>
                    <div className="flex gap-4">
                        <p className="px-[19px] text-xl py-[9px] bg-gradient-to-r from-[#7E90FE] to-[#9873FF] rounded-[4px] bg-clip-text text-transparent border-[1px] font-extrabold border-[#7E90FE]">{remote_or_onsite}</p>
                        <p className="px-[19px] text-xl py-[9px] bg-gradient-to-r from-[#7E90FE] to-[#9873FF] rounded-[4px] bg-clip-text text-transparent border-[1px] font-extrabold border-[#7E90FE]">{job_type}</p>
                    </div>
                    <div className="text-xl font-semibold text-[#757575] flex gap-6 mt-4 mb-6">
                        <p className="flex items-center gap-2">
                            <img className="size-6" src={locationImg} alt="" />
                            {location}
                        </p>
                        <p className="flex items-center gap-2">
                            <img className="size-6" src={dollar} alt="" />
                            Salary : {salary}
                        </p>
                    </div>
                </div>
                <Link to={`/job/${id}`}><button className="text-xl btn btn-sm font-extrabold text-white w-[157px] h-12 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] rounded-[4px]">View Details</button></Link>

            </div>
        </div>

    );
};
AppliedJobs.propTypes = {
    job: PropTypes.object.isRequired
};
export default AppliedJobs;