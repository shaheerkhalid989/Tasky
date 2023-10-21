import React from 'react';
import CreateBoardModal from './Board/CreateBoardModal';
import { useState } from 'react';

const HomeComponent = () => {
    const [showCreateBoardModal, setShowCreateBoardModal] = useState(false);

    const handleAddBoard = () => {
        setShowCreateBoardModal(true);
    };

    return (
        <div className='flex flex-col lg:flex-row lg:my-16 lg:mx-16'>
            {/* div for img and content */}
            <div className="lg: w-11/12">
                <div className="card bg-base-100 shadow-xl h-min">
                    <div className="max-w-[500px] mx-auto">
                        <figure className="px-10 pt-10">
                            <img src="https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRpbWV8ZW58MHx8MHx8fDA%3D" alt="Index" className="rounded-xl w-96 h-44" />
                        </figure>
                    </div>
                    <div className="card-body items-center text-center mt-4 flex flex-col justify-center max-w-[400px] mr-4 ml-4">
                        <h2 className="card-title text-gray-400 font-bold">Stay on track and up to date</h2>
                        <p className='text-gray-400'>Invite people to boards and cards, leave comments, add due dates, and we'll show the most important activity here.</p>
                    </div>
                </div>
            </div>
            {/* div for Links */}
            <div className='lg:w-1/2 lg:h-min flex flex-col items-start lg:ml-16 lg:mt-8 mt-8'>
                <h1 className='text-gray-400 font-bold ml-2'>Links</h1>
                <button 
                    className="mt-4 flex items-start bg-transparent border border-transparent text-gray-400 p-2 rounded-md transition duration-300 "
                    onClick={handleAddBoard}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7 mr-2 bg-gray-700 rounded-md"
                        viewBox="0 0 20 19"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M14 9a1 1 0 0 1-1 1h-2v2a1 1 0 0 1-2 0V10H7a1 1 0 0 1 0-2h2V6a1 1 0 0 1 2 0v2h2a1 1 0 0 1 1 1z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <p className='hover:text-gray-100'>Create a Board</p>
                </button>
            </div>
            <CreateBoardModal
                isOpen={showCreateBoardModal}
                onClose={() => setShowCreateBoardModal(false)}
                // addBoard={addBoardToWorkspace}
            />
        </div>
    );
};

export default HomeComponent;