import { NavLink } from "react-router-dom"
const Header = () => {
    const navLink = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/statistics'}>Statistics</NavLink></li>
        <li><NavLink to={'/applied'}>Applied Jobs</NavLink></li>
        <li><NavLink to={'/blog'}>Blog</NavLink></li>
    </>
    return (
        <div className="pt-[60px] bg-[linear-gradient(90deg,rgba(126,144,254,0.05)0%,rgba(152,115,255,0.05)100%)]">
            <div className="max-w-[1320px] mx-auto ">
                <div className="navbar pb-10">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {navLink}
                                <li><NavLink to={'/startapplying'}>Start Applying</NavLink></li>
                            </ul>
                        </div>
                        <a className="btn btn-ghost text-[32px] font-extrabold">CareerHub</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu font-bold menu-horizontal text-[#757575] px-1">
                            {navLink}
                        </ul>
                    </div>
                    <div className="hidden lg:flex navbar-end p-0">
                        <a className="btn btn-sm font-extrabold text-xl text-white w-[190px] h-[65px] bg-gradient-to-r from-[#7E90FE] to-[#9873FF] p-0">Start Applying</a>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Header;