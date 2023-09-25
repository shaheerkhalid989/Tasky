import React from 'react';
// import {Link} from 'react-router-dom';
import TaskLogo from '../../Pages/Assets/trello-removebg.png';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

// import { withRouter } from "react-router-dom";
// import NavLinks from "./Navlinks.tsx";

const StartPage = () =>{

    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);

    const handleButtonClick = () => {
        // Set loading state to true when the button is clicked
        setIsLoading(true);

        // Simulate a delay (for example purposes)
        setTimeout(() => {
            // Reset loading state after a delay (simulate page loading)
            setIsLoading(false);
            history.push('/Login')
        }, 1000); // Replace 1000 with the actual loading time or async operation time
    };
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);

    const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen4(false);
    };

    const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
    setIsOpen1(false);
    setIsOpen3(false);
    setIsOpen4(false);
    };

    const toggleDropdown3 = () => {
    setIsOpen3(!isOpen3);
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen4(false);
    };

    const toggleDropdown4 = () => {
    setIsOpen4(!isOpen4);
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen3(false);
    };

    return (
        
        <div>
            {/* Navbar */}
            <nav className="bg-gray-100 text-gray-900 py-4">
                <div className="container mx-auto flex justify-around items-center">
                <div className="text-xl font-bold flex items-center">
                <img src={TaskLogo} alt="" className='h-8' />
                    Project Manager
                </div>
                <div className="relative">
                    <button
                    onClick={toggleDropdown1}
                    className="inline-flex gap-x-1.5 text-gray-500 font-semi-bold rounded-md hover:text-gray-300 focus:outline-none px-4 py-2"
                    >
                    Features
                    </button>
                    {isOpen1 && (
                    <ul className="absolute bg-gray-800 rounded mt-2 py-2 w-full">
                        <li>
                        <a
                            href="#"
                            className="block text-white px-4 py-2 hover:bg-gray-700"
                        >
                            Option 1A
                        </a>
                        </li>
                        <li>
                        <a
                            href="#"
                            className="block text-white px-4 py-2 hover:bg-gray-700"
                        >
                            Option 1B
                        </a>
                        </li>
                        <li>
                        <a
                            href="#"
                            className="block text-white px-4 py-2 hover:bg-gray-700"
                        >
                            Option 1C
                        </a>
                        </li>
                        <li>
                        <a
                            href="#"
                            className="block text-white px-4 py-2 hover:bg-gray-700"
                        >
                            Option 1D
                        </a>
                        </li>
                    </ul>
                    )}
                    <button
                    onClick={toggleDropdown2}
                    className="text-gray-500 font-semi-bold hover:text-gray-300 focus:outline-none px-4 py-2"
                    >
                    Solutions
                    </button>
                    {isOpen2 && (
                    <ul className="absolute bg-gray-800 rounded mt-2 py-2 w-full">
                        <li>
                        <a
                            href="#"
                            className="block text-white px-4 py-2 hover:bg-gray-700"
                        >
                            Option 2A
                        </a>
                        </li>
                        <li>
                        <a
                            href="#"
                            className="block text-white px-4 py-2 hover:bg-gray-700"
                        >
                            Option 2B
                        </a>
                        </li>
                        <li>
                        <a
                            href="#"
                            className="block text-white px-4 py-2 hover:bg-gray-700"
                        >
                            Option 2C
                        </a>
                        </li>
                        <li>
                        <a
                            href="#"
                            className="block text-white px-4 py-2 hover:bg-gray-700"
                        >
                            Option 2D
                        </a>
                        </li>
                    </ul>
                    )}
                    <button
                    onClick={toggleDropdown3}
                    className="text-gray-500 font-semi-bold hover:text-gray-300 focus:outline-none px-4 py-2"
                    >
                    Plans
                    </button>
                    {isOpen3 && (
                    <ul className="absolute bg-gray-800 rounded mt-2 py-2 w-full">
                        <li>
                        <a
                            href="#"
                            className="block text-white px-4 py-2 hover:bg-gray-700"
                        >
                            Option 3A
                        </a>
                        </li>
                        <li>
                        <a
                            href="#"
                            className="block text-white px-4 py-2 hover:bg-gray-700"
                        >
                            Option 3B
                        </a>
                        </li>
                        <li>
                        <a
                            href="#"
                            className="block text-white px-4 py-2 hover:bg-gray-700"
                        >
                            Option 3C
                        </a>
                        </li>
                        <li>
                        <a
                            href="#"
                            className="block text-white px-4 py-2 hover:bg-gray-700"
                        >
                            Option 3D
                        </a>
                        </li>
                    </ul>
                    )}
                    <button
                    onClick={toggleDropdown4}
                    className="text-gray-500 font-semi-bold hover:text-gray-300 focus:outline-none px-4 py-2"
                    >
                    Resources
                    </button>
                    {isOpen4 && (
                    <ul className="absolute bg-gray-800 rounded mt-2 py-2 w-full">
                        <li>
                        <a
                            href="#"
                            className="block text-white px-4 py-2 hover:bg-gray-700"
                        >
                            Option 4A
                        </a>
                        </li>
                        <li>
                        <a
                            href="#"
                            className="block text-white px-4 py-2 hover:bg-gray-700"
                        >
                            Option 4B
                        </a>
                        </li>
                        <li>
                        <a
                            href="#"
                            className="block text-white px-4 py-2 hover:bg-gray-700"
                        >
                            Option 4C
                        </a>
                        </li>
                        <li>
                        <a
                            href="#"
                            className="block text-white px-4 py-2 hover:bg-gray-700"
                        >
                            Option 4D
                        </a>
                        </li>
                    </ul>
                    )}
                </div>
                    <button  className="bg-blue-500 hover:bg-blue-600 grid justify-items-end text-white font-bold py-2 px-4 rounded" 
                        onClick={handleButtonClick} >
                            {isLoading ? 'Loading...' : 'Get Started'}
                    </button>
                </div>
            </nav>
            {/*Div for Background Gradient in style tag and other things on gradient*/}
            <div className="relative flex flex-col md:flex-row" style={{
                background: `url('https://images.ctfassets.net/rz1oowkt5gyp/7lTGeXbBRNRLaVk2MdBjtJ/99c266ed4cb8cc63bd0c388071f01ff6/white-wave-bg.svg') center bottom -0.5px / 100% 14% no-repeat scroll padding-box border-box, linear-gradient(60deg, rgb(82, 67, 170), rgb(237, 80, 180)) 0% 0% / auto repeat scroll padding-box border-box rgb(82, 67, 170)`
                }}> 
                <div className="md:w-1/2 md:flex-1">
                    <div className="mx-8 md:mx-8 my-8 md:my-16 md:w-7/12 text-start md:ml-44 ">
                        <h1 className="text-3xl sm:text-2xl md:text-5xl text-white font-bold mb-4">This brings all your tasks, teammates, and tools together</h1>
                        <p className="text-lg md:text-xl text-white font-normal">Keep everything in the same place—even if your team isn't.</p>
                    </div>
                    <form action="https://id.atlassian.com/signup?application=trello&amp;continue=https%3A%2F%2Ftrello.com%2Fauth%2Fatlassian%2Fcallback%3Fdisplay%3DeyJ2ZXJpZmljYXRpb25TdHJhdGVneSI6InNvZnQifQ%253D%253D%26createMember%3Dtrue&amp;display=eyJ2ZXJpZmljYXRpb25TdHJhdGVneSI6InNvZnQifQ%3D%3D" data-testid="ui-email-signup-form" data-uuid="2vnd61JpVoeKM6WavABI4B" className="UiEmailSignupstyles__Form-sc-9nggyw-0 HlPFN">
                        <div className="link-buttonstyles__BxpButton-sc-1utqn26-1 inwKxu mx-8 md:ml-44">
                            <input type="email" aria-label="Email" data-testid="ui-email-signup-input" name="email" placeholder="Email" className="UiEmailSignupstyles__InputEmail-sc-9nggyw-1 ZIPtJ font-semibold p-3 md:p-3 bg-white border-[1px] rounded-md w-full md:w-3/6 "/>
                            <button className='text-white md:ml-3 md:mt-2 mt-2 font-semibold bg-blue-700 p-3 rounded-md' type="submit" aria-label="Sign up for Trello - it's free!">Sign up, it's free</button>
                        </div>
                    </form>
                </div>
                <div className="md:w-1/2 md:flex-1">
                    <img
                    className="h-64 md:h-5/6 md:mt-4 mx-auto mt-8 mr-32 md:mt-0"
                    src="https://images.ctfassets.net/rz1oowkt5gyp/75rDABL8fyMtNLlUAtBxrg/c5e145977a86c41c47e17c69410c64f7/TrelloUICollage_4x.png?w=1140&fm=webp"
                    alt="Trello UI Collage"
                    />
                </div>
            </div>
            {/* Div for services */}
            <div className='md:ml-44'>
                <p className='text-black font-semibold'>Services Provided for our User</p>
                <h1 className='md:text-3xl text-black font-bold'>Workflows for any project, big or small</h1>
            </div>
        </div> 
        // Main div end
    );
};
export default StartPage