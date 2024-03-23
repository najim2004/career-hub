import bannerImg from '../../assets/images/user.png'

const Banner = () => {
    return (
        <div className='flex justify-between items-center max-w-[1320px] mx-auto '>
            <div className="">
                <h3 className="lg:w-[570px] max-w-[570px] mb-6 text-[80px] font-extrabold leading-[100px]">One Step Closer To Your <span className="bg-gradient-to-l from-[#7E90FE] to-[#9873FF]  bg-clip-text text-transparent">Dream Job</span></h3>
                <p className="mb-8 max-w-[519px] text-lg font-medium text-[#757575]">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className="bg-gradient-to-r btn btn-sm w-[172px] h-[65px] text-xl font-extrabold text-white from-[#7E90FE] to-[#9873FF]">Get Started</button>
            </div>
            <div className="flex-grow max-h-[744px]">
                <img className='w-full h-full' src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;