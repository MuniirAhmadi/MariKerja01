import { useState, useEffect } from "react";
import TopNav from '../components/TopNav';

export default function ProfileJS() {
  const [showSidebar, setShowSidebar] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      // Check screen width and toggle showSidebar accordingly
      if (window.innerWidth <= 718) { // Adjust the breakpoint as needed
        setShowSidebar(false);
      } else {
        setShowSidebar(true);
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency array to run only once on component mount


  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <div className={showSidebar ? "relative w-64 flex-shrink-0 border-r-2 border-black-950" : "hidden"}>
        <div className="h-full relative w-64 flex-shrink-0 border-r-2 border-black-950">
          <div className="p-4">
            <h1 className="text-2xl font-bold text-center">MariKerja</h1>
            <ul className="mt-4">
              <li className="py-2 flex items-center">
                <a href="/home" className="block container max-width flex items-center gap-3 px-4 py-2 hover:bg-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>Home
                </a>
              </li>
              <li className="py-2 flex items-center">
                <a href="/profilee" className="block container max-width flex items-center gap-3 px-4 py-2 hover:bg-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>Profile
                </a>
              </li>
              <li className="py-2 flex items-center">
                <a href="#" className="block container max-width flex items-center gap-3 px-4 py-2 hover:bg-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-activity">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  </svg>Activity
                </a>
              </li>
              <li className="py-2 flex items-center">
                <a href="login" className="block container max-width flex items-center gap-3 px-4 py-2 hover:bg-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-log-out">
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                    <polyline points="16 17 21 12 16 7"></polyline>
                    <line x1="21" y1="12" x2="9" y2="12"></line>
                  </svg>Log out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>


      {/* Content */}
      <div className="flex-1">
        {/* Sticky Navigation Bar */}
        <TopNav title="Profile" />
        {/* User Information */}
        <div className="flex-1 p-8 text-left  ">
          <div className="mb-10 mt-10">
            <div className="w-full flex flex-col mb-4">
              <label htmlFor="Name" className="w-full justify-start block text-black font-medium mb-0">
                Name
              </label>
              <a className="w-1/2 block  bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3">
                Muniir Ahmadi
              </a>
            </div>
            <div className="w-full flex flex-col mb-4">
              <label htmlFor="Email" className="w-full justify-start block text-black font-medium mb-0">
                Email Address
              </label>
              <a className="w-1/2 block  bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3">
                email@domain.com
              </a>
            </div>
            <div className="w-full flex gap-2 justify-start mb-4">
              <label htmlFor="Date of birth" className="w-1/4 justify-start block text-black font-medium mb-0">
                Date of Birth
              </label>
              <a className="w-20 block  bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3">
                25
              </a>
              <a className="w-20 block  bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3">
                May
              </a>
              <a className="w-20 block  bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3">
                2024
              </a>
            </div>
            <div className="w-full flex gap-2 justify-start mb-4">
              <label htmlFor="Gender" className="w-1/4 justify-start block text-black font-medium mb-0">
                Gender
              </label>
              <a className="w-20 block  bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3">
                Male
              </a>
            </div>
            <button className="mb-4 px-4 py-2 bg-blue-500 text-white rounded">Edit Profile</button>
          </div>

          {/* Resume Information */}
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-left mb-4">Resume</h2>
            <div className="w-full flex flex-col mb-4">
              <label htmlFor="FullName" className="w-full justify-start block text-black font-medium mb-0">
                Full Name
              </label>
              <a className="w-2/3 block  bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3">
                Madisson Dull
              </a>
            </div>
            <div className="w-full flex flex-col mb-4">
              <label htmlFor="ContactNumber" className="w-full justify-start block text-black font-medium mb-0">
                Contact Number
              </label>
              <a className="w-2/3 block  bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3">
              01234567890
              </a>
            </div>
            <div className="w-full flex flex-col mb-4">
              <label htmlFor="Address" className="w-full justify-start block text-black font-medium mb-0">
                Address
              </label>
              <a className="w-2/3 block  bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3">
                1234 Elm Street
                Apt. 56B 
                Springfield, IL 62704 
                United States
              </a>
            </div>
            <div className="w-full flex flex-col mb-4">
              <label htmlFor="AboutMe" className="w-full justify-start block text-black font-medium mb-0">
                About Me
              </label>
              <a className="w-2/3 h-40 block bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3">
              Employment status typically refers to whether a position is full-time or part-time. Full-time employees generally work between 35-40 hours per week and often receive benefits like health insurance, retirement plans, and paid time off.
              </a>
            </div>
            <div className="w-full flex flex-col mb-4">
              <label htmlFor="Education" className="w-full justify-start block text-black font-medium mb-0">
                Education
              </label>
              <a className="w-2/3 h-40 block  bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3">
                Employment status typically refers to whether a position is full-time or part-time. Full-time employees generally work between 35-40 hours per week and often receive benefits like health insurance, retirement plans, and paid time off.
              </a>
            </div>
            <div className="w-full flex flex-col mb-4">
              <label htmlFor="website" className="w-full justify-start block text-black font-medium mb-0">
                Persona Skill
              </label>
              <a className="w-2/3 h-40 block  bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3">
                Employment status typically refers to whether a position is full-time or part-time. Full-time employees generally work between 35-40 hours per week and often receive benefits like health insurance, retirement plans, and paid time off.
              </a>
            </div>
            <button className="mb-4 px-4 py-2 bg-blue-500 text-white rounded">Edit Resume</button>
          </div>
        </div>
      </div>
    </div>
  );
}
