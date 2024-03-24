import { Link, useLoaderData, useParams } from "react-router-dom";
import bg1 from '../../assets/images/bg1.png';
import bg2 from '../../assets/images/bg2.png';
import dollar from '../../assets/icons/money.png';
import calender from '../../assets/icons/calendar.png';
import emails from '../../assets/icons/email.png';
import phones from '../../assets/icons/phone.png';
import location2 from '../../assets/icons/location2.png';
import { toast } from 'react-toastify';
import { saveJobApplication } from '../../Utility/localStorage';




const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const job = jobs.find(job => job.id === parseInt(id));
    const { job_title, salary, job_description, job_responsibility, educational_requirements, experiences, contact_information } = job;
    const { phone, email, address } = contact_information;
    const handleApplyNow = () => {
        saveJobApplication(parseInt(id));
        toast.success('Applied Successfully!')
    };
    return (
        <div className=" mb-[130px]">
            <div className="mb-[130px]  relative h-[218px] flex justify-center items-center bg-gray-50">
                <img className="w-[350px] h-[218px] absolute bottom-0 left-0" src={bg1} alt="" />
                <h3 className="text-[32px] font-extrabold text-center">Job Details</h3>
                <img className="absolute  right-0 -top-[80%] w-[297px]" src={bg2} alt="" />
            </div>
            <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-6 gap-6">
                <div className="col-span-4 space-y-6 *:text-[#757575] *:font-medium *:leading-8">
                    <h2 className=""><span className="font-extrabold text-[#1A1919]">Job Description:</span> {job_description}</h2>
                    <h2 className=""><span className="font-extrabold text-[#1A1919]">Job Responsibility:</span> {job_responsibility}</h2>

                    <h2 className="font-extrabold text-[#1A1919]"><span className="font-extrabold text-[#1A1919]">Educational Requirements:</span></h2>

                    <p className="">{educational_requirements}</p>

                    <h2 className=""><span className="font-extrabold text-[#1A1919]">Experiences:</span></h2>

                    <p className="">{experiences}</p>

                </div>
                <div className="col-span-2">
                    <div className="p-[30px]  rounded-lg bg-[linear-gradient(90deg,rgba(126,144,254,0.10)0%,rgba(152,115,255,0.10)100%)]">
                        <h3 className="font-extrabold text-xl">Job Details</h3>
                        <hr className="my-6 border-[1px]" />
                        <p className="flex text-xl font-bold mb-4">
                            <img className="mr-2 size-6" src={dollar} alt="" />
                            <span className="font-bold text-[#474747]">Salary :</span>
                            <span className="text-[#757575] font-medium">
                                {salary}
                            </span>
                        </p>

                        <p className="flex  w-full text-xl mb-8">
                            <img className="mr-2 size-6" src={calender} alt="" />
                            <span className="text-[#757575] font-medium">
                                <span className="font-bold text-[#474747]">
                                    Job Title:
                                </span>
                                {job_title}
                            </span>
                        </p>
                        <h3 className="font-extrabold text-xl">Contact Information</h3>
                        <hr className="my-6 border-[1px]" />
                        <p className="flex text-xl font-bold mb-4">
                            <img className="mr-2 size-6" src={phones} alt="" />
                            <span className="font-bold text-[#474747]">Phone :
                                <span className="text-[#757575] font-medium">
                                    {phone}
                                </span>
                            </span>
                        </p>
                        <p className="flex text-xl font-bold mb-4">
                            <img className="mr-2 size-6" src={emails} alt="" />
                            <span className="font-bold text-[#474747]">Email :
                                <span className="text-[#757575] font-medium">
                                    {email}
                                </span>
                            </span>
                        </p>
                        <p className="flex text-xl font-bold">
                            <img className="mr-2 size-6" src={location2} alt="" />
                            <span className="font-bold text-[#474747]">Address :
                                <span className="text-[#757575] font-medium">
                                    {address}
                                </span>
                            </span>
                        </p>
                    </div>
                    <button onClick={handleApplyNow} className="mt-6 btn w-full h-[65px] bg-gradient-to-r from-[#7E90FE] to-[#9873FF] rounded-[8px] text-xl font-extrabold text-white">Apply Now</button>
                    <div className="w-full flex justify-center mt-4">
                        <Link className="text-center text-red-400 w-full text-xl font-bold" to={'/applied'}>Click here for go to Applied Jobs</Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default JobDetails;