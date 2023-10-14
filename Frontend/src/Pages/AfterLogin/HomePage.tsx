import React, { useState, useEffect } from 'react';
import { useHistory} from 'react-router-dom';
import homeLogo from '../Assets/trello-home-removebg.png';
// import Workspace from './SidebarContent/workSpaceContent.jsx'
import HomeComponent from './SidebarContent/homeButtonContent.jsx';
import axios from 'axios';


const HomePage = () => {

    // Variables---------------------------------------------
    const [showDropdown1, setShowDropdown1] = useState(false);
    const [showDropdown2, setShowDropdown2] = useState(false);
    const [showDropdown3, setShowDropdown3] = useState(false);
    const [showDropdown4, setShowDropdown4] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [workspaces, setWorkspaces] = useState<{ name: string; boards: string[]; }[]>([]);
    const [showCreateDropdown, setShowCreateDropdown] = useState(false);
    const [currentComponent, setCurrentComponent] = useState("HomeComponent");
    const [showCreateBoardModal, setShowCreateBoardModal] = useState(false);
    const [selectedWorkspace, setSelectedWorkspace] = useState('');
    const [showTemplateDropdown, setShowTemplateDropdown] = useState(false);
    const [workspaceMessage, setWorkspaceMessage] = useState('');
    const serverURL = 'http://localhost:5000/api/workspace';
    // Variables---------------------------------------------

    // Methods-----------------------------------------------
   
    const toggleCreateDropdown = () => {
        setShowCreateDropdown(!showCreateDropdown);
    };

    const closeDropdowns = () => {
        setShowDropdown1(false);
        setShowDropdown2(false);
        setShowDropdown3(false);
        setShowDropdown4(false);
    };

    const toggleDropdown = (dropdown) => {
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    };

    const toggleDropdown1 = () => {
        closeDropdowns();
        setShowDropdown1(!showDropdown1);
    }

    const toggleDropdown2 = () => {
        closeDropdowns();
        setShowDropdown2(!showDropdown2);
    }

    const toggleDropdown3 = () => {
        closeDropdowns();
        setShowDropdown3(!showDropdown3);
    }

    const toggleDropdown4 = () => {
        closeDropdowns();
        setShowDropdown4(!showDropdown4);
    }
      

    const WorkspaceIcon = () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 mr-2"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
            <path d="M8 2L12 6 16 2" />
        </svg>
    );

    const DeleteIcon = () => (
        <svg 
            className='ml-2'
            width="20px" 
            height="24px" 
            viewBox="0 0 24 24" 
            color='yellow'
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            stroke='white'
            stroke-width="1.5">
            <path d="M20 9L18.005 20.3463C17.8369 21.3026 17.0062 22 16.0353 22H7.96474C6.99379 22 6.1631 21.3026 5.99496 20.3463L4 9" fill="#000000"></path>
            <path 
                d="M20 9L18.005 20.3463C17.8369 21.3026 17.0062 22 16.0353 22H7.96474C6.99379 22 6.1631 21.3026 5.99496 20.3463L4 9H20Z" 
                stroke="#FFFFFF" stroke-width="1.5" strokeLinecap="round" stroke-linejoin="round">
            </path>
            <path 
                d="M21 6H15.375M3 6H8.625M8.625 6V4C8.625 2.89543 9.52043 2 10.625 2H13.375C14.4796 2 15.375 2.89543 15.375 4V6M8.625 6H15.375" 
                stroke="#FFFFFF" stroke-width="1.5" strokeLinecap="round" stroke-linejoin="round">
            </path>
        </svg>
    );
    // Methods-----------------------------------------------

    return (
        <div>
            <nav className="bg-gray-800 text-gray-400 font-semibold p-3 flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <div className="text-xl mb-2 font-bold flex">
                        <img src={homeLogo} alt="Home Logo" className='h-8' />
                        <h1 className='ml-2'>Project Manager</h1>
                    </div>
                    <ul className="flex space-x-8">
                    <li className="relative ">
                        <button onClick={toggleDropdown1} className="focus:outline-none ml-4">
                        Workspaces &#9662;
                        </button>
                        {showDropdown1 && (
                        <div className="absolute top-full left-0 bg-gray-600 text-gray-400 py-2 px-4 mt-2 ml-4 rounded-lg w-60">
                            {/* <a href="/" className="block py-2">Home 1</a>
                            <a href="/" className="block py-2">Home 2</a>
                            <a href="/" className="block py-2">Home 3</a> */}
                            <p className='font-bold text-sm'>Create your workspace and you will see here.</p>
                        </div>
                        )}
                    </li>
                    <li className="relative">
                        <button onClick={toggleDropdown2} className="focus:outline-none">
                        Recent &#9662;
                        </button>
                        {showDropdown2 && (
                        <div className="absolute top-full left-0 bg-gray-600 text-gray-400 py-2 px-4 mt-2 rounded-lg w-60">
                            {/* <a href="/" className="block py-2">About 1</a>
                            <a href="/" className="block py-2">About 2</a>
                            <a href="/" className="block py-2">About 3</a> */}
                            <img src="https://images.unsplash.com/photo-1524678714210-9917a6c619c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGltZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                            <p className='text-sm font-medium'>You'll find the boards you've recently viewed here.</p>
                        </div>
                        )}
                    </li>
                    <li className="relative">
                        <button onClick={toggleDropdown3} className="focus:outline-none">
                        Starred &#9662;
                        </button>
                        {showDropdown3 && (
                        <div className="absolute top-full left-0 bg-gray-600 text-gray-400 py-2 px-4 mt-2 rounded-lg w-60">
                            {/* <a href="/" className="block py-2">Services 1</a>
                            <a href="/" className="block py-2">Services 2</a>
                            <a href="/" className="block py-2">Services 3</a> */}
                            <img className='h-full w-full' src="https://images.unsplash.com/photo-1513151233558-d860c5398176?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3RhciUyMHlvdSUyMHdvcmt8ZW58MHx8MHx8fDA%3D" alt="" />
                            <p className='text-sm font-medium'>Do star any board and you will see here</p>
                        </div>
                        )}
                    </li>
                    <li className="relative">
                        <button onClick={toggleDropdown4} className="focus:outline-none">
                        Templates &#9662;
                        </button>
                        {showDropdown4 && (
                        <div className="absolute top-full left-0 bg-gray-600 text-gray-400 py-2 px-4 mt-2 rounded-lg w-60">
                            {/* <a href="/" className="block py-2">Contact 1</a>
                            <a href="/" className="block py-2">Contact 2</a>
                            <a href="/" className="block py-2">Contact 3</a> */}
                            <img className='h-full w-full' src="https://images.unsplash.com/photo-1626544827763-d516dce335e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGVtcGxhdGV8ZW58MHx8MHx8fDA%3D" alt="" />
                            <p className='text-sm font-medium'>You will see tmplate here and it will be implemented soon</p>
                        </div>
                        )}
                    </li>
                    </ul>
                    <div className="relative inline-block">
                        <button className={"bg-blue-500 text-gray-700 px-3 py-1 rounded focus:outline-none"} onClick={toggleCreateDropdown}>Create</button>
                        {showCreateDropdown && (
                                <div className="absolute mt-4 object-cover bg-gray-950 rounded-lg shadow-lg z-10">
                                    {/* Dropdown items for Create */}
                                    <ul className="py-2 flex flex-col justify-start items-start w-44">
                                        <li className="px-4 py-2 hover:text-gray-200 cursor-pointer" onClick={handleAddBoard}>Create Board</li>
                                        <li className="px-4 py-2 hover:text-gray-200 cursor-pointer">Create Template</li>
                                        <li className="px-4 py-2 hover:text-gray-200 cursor-pointer">Create Workspace</li>
                                    </ul>
                                </div>
                            )}
                            
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <input type="text" placeholder="Search" className="px-1 py-1 border text-gray-200 text-sm font-sans font-light border-gray-500 rounded bg-transparent focus:outline-none" />
                    <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                    <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                </div>
            </nav>

            <div className="h-0.5 bg-gray-400"></div> {/* div for line after navbar */}

            {/* div for after navbar */}
            <div className="flex h-screen bg-gray-800">

                {/* div for side bar */}
                <div className="bg-gray-900 text-gray-400 w-96 min-h-screen flex justify-center">
                    {/* Sidebar content */}
                    <div className='w-64'>
                        {/* div for home, boards and template */}
                        <div className="p-4">
                            <h1 className="text-2xl font-bold">Menu</h1>
                                {/* Home Dropdown */}
                                <div className="mt-4">
                                    <button 
                                        className={`flex items-center w-full p-1 ${currentComponent === 'HomeComponent' ? 'bg-blue-900' : 'hover:bg-gray-500'} rounded-md`}
                                        onClick={() => {
                                            setCurrentComponent("HomeComponent");
                                            setActiveDropdown(null);
                                        }}
                                        // className={"flex items-center w-full p-1 ${currentComponent === 'HomeComponent' ? 'bg-blue-500' : 'hover:bg-gray-500'} hover:bg-gray-500 rounded-md"} 
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                            <path d="M12 2L0 12h4v10h16v-10h4L12 2zm8 18h-3v-6h-4v6H4V9h16l.01 11z" />
                                        </svg>
                                        <span className="ml-2">Home</span>
                                    </button>
                                </div>
                                {/* Boards Dropdown */}
                                <div className="mt-4">
                                    <button 
                                        className={`flex items-center w-full p-1 ${currentComponent === 'BoardComponent' ? 'bg-blue-900' : 'hover:bg-gray-500'} rounded-md`}
                                        onClick={() => {
                                            setCurrentComponent("BoardComponent");
                                            setActiveDropdown(null);
                                        }}
                                        // className="flex items-center w-full p-1 hover:bg-gray-500 rounded-md " 
                                        // onClick={() => toggleDropdown('boards')}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                            <path d="M3 3h5v5H3V3zm0 7h5v5H3v-5zm0 7h5v5H3v-5zm7-14h5v5h-5V3zm0 7h5v5h-5v-5zm0 7h5v5h-5v-5zm7-14h5v5h-5V3zm0 7h5v5h-5v-5zm0 7h5v5h-5v-5z" />
                                        </svg>
                                        <span className="ml-2">Boards</span>
                                    </button>
                                </div>
                                {/* Templates Dropdown */}
                                <div className="mt-4">
                                    <button 
                                        className={`flex items-center w-full p-1 ${currentComponent === 'TemplateComponent' ? 'bg-blue-900' : 'hover:bg-gray-500'} rounded-md`}
                                        onClick={() => {
                                            setCurrentComponent("TemplateComponent"); 
                                            toggleDropdown('templates');
                                        }}
                                        // className={"flex items-center w-full p-1 hover:bg-gray-500 rounded-md "} 
                                        // onClick={() => toggleDropdown('templates')}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M21 14h-2v-2h2v2zm-4 4H7v-1l5-10 5 10v1zm-9-4h2v-2H8v2zm-2 4H3v-2h2v2zm0-8H3V7h2v2zm14-4h-2v2h2V7zm0 4h-2v2h2v-2zm0 7h-2v2h2v-2z" />
                                        </svg>
                                        <span className="ml-2">Templates</span>
                                    </button>
                                    <div className={`flex justify-center ${activeDropdown === 'templates' ? 'block' : 'hidden'}`}>
                                        <ul>
                                            <li className="py-2">Business</li>
                                            <li className="py-2">Design</li>
                                            <li className="py-2">Education</li>
                                            <li className="py-2">Engineering</li>
                                            <li className="py-2">Marketing</li>
                                            <li className="py-2">Sales</li>
                                        </ul>
                                    </div>
                                </div>
                            <hr className="border-gray-300 my-4" /> {/* Separating line */}
                        </div>
                        {/* div for home, boards and template ended */}

                        {/* Div workspace start */}
                        {/* <Workspace/> */}
                        <div className="flex-1 ml-6">
                            <h2 className="flex text-sm font-semibold mb-2">
                                <WorkspaceIcon/>
                                Workspaces
                            </h2>
                                <div className='text-gray-600 font-semibold'>
                                {
                                    workspaces.map((workspace, index) => (
                                    <div key={index} className="flex items-start justify-between mb-2 ">
                                        <div className="ml-4 font-md text-sm flex items-start">
                                            {/* <span className="text-lg font-semibold mr-2">+</span> */}
                                            <button 
                                                className='flex items-center cursor-pointer'
                                                onClick={() => { toggleDropdown(workspace); }}
                                            >
                                                <span>{workspace.WorkspaceName}</span>
                                            </button>
                                            <div className={`${activeDropdown === workspace ? 'block' : 'hidden'}`}>
                                                <ul className='cursor-pointer mt-4'>
                                                    <li className="py-2">Boards</li>
                                                    <li className="py-2">Add Members</li>
                                                    <li className="py-2">Setting</li>
                                                </ul>
                            
                                            </div>
                                        </div>
                                        <button
                                            className="focus:outline-none"
                                            >
                                            <DeleteIcon/>
                                        </button>
                                    </div>
                                ))}
                                </div>
                                <button className="flex items-center mt-2 text-blue-500 focus:outline-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                        fillRule="evenodd"
                                        d="M10 2a1 1 0 011 1v6h6a1 1 0 110 2h-6v6a1 1 0 11-2 0v-6H4a1 1 0 110-2h6V3a1 1 0 011-1z"
                                        clipRule="evenodd"
                                        />
                                    </svg>
                                    Add Workspace
                                </button>
                        </div> {/* Div for workspace*/}

                    </div> {/* Sidebar content */}

                </div>
                {/* div for side bar ended */}
            </div>  
            {/* div for after bar ended*/}
        </div> /* Main Div ended */
    );
}

export default HomePage