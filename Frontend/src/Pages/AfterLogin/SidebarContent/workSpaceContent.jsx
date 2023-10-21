
import React, { useState } from 'react';

const WorkspaceComponent = () => {
    const [workspaces, setWorkspaces] = useState([]);
    const [newWorkspace, setNewWorkspace] = useState('');
    const [selectedWorkspace, setSelectedWorkspace] = useState(null);
    const [newMember, setNewMember] = useState('');

    const addWorkspace = () => {
        if (newWorkspace.trim() !== '') {
            setWorkspaces([...workspaces, newWorkspace]);
            setNewWorkspace('');
        }
    };

    const deleteWorkspace = (index) => {
        const updatedWorkspaces = [...workspaces];
        updatedWorkspaces.splice(index, 1);
        setWorkspaces(updatedWorkspaces);
    };

    const addMemberToWorkspace = () => {
        if (newMember.trim() !== '') {
            // Logic to add newMember to the selected workspace
            // You might use selectedWorkspace to identify where to add the new member
            console.log(`Adding ${newMember} to workspace ${selectedWorkspace}`);
            setNewMember('');
        }
    };

    const WorkspaceIcon = () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 mr-2 mt-1"
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

    const workspaceItems = ['Boards', 'Highlights', 'Views', 'Members', 'Settings'];

    return (
        <div className="flex-1">
            <h2 className="flex text-lg font-semibold mb-2">
                <WorkspaceIcon />
                Workspaces
            </h2>
            <div>
                {workspaces.map((workspace, index) => (
                    <div key={index} className="flex items-center justify-between mb-2">
                        <div className="flex items-center ml-2 font-semibold">
                            <h3>{workspace}</h3>
                        </div>
                        <button onClick={() => deleteWorkspace(index)} className="text-red-500 focus:outline-none">
                            <DeleteIcon />
                        </button>
                    </div>
                ))}
            </div>
            <div className="mt-2">
                <div className="relative">
                    <button
                        onClick={() => setSelectedWorkspace('Members')}
                        className="flex items-center text-blue-500 focus:outline-none"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4 mr-1"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 2a1 1 0 011 1v6h6a1 1 0 110 2h-6v6a1 1 0 11-2 0v-6H4a1 1 0 110-2h6V3a1 1 0 011-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Add Workspace
                    </button>
                    {selectedWorkspace === 'Members' && (
                        <div className="absolute mt-1 bg-white border border-gray-300 w-40 rounded-lg shadow-lg">
                            <input
                                type="text"
                                value={newMember}
                                onChange={(e) => setNewMember(e.target.value)}
                                placeholder="Add Member"
                                className="p-2 w-full focus:outline-none"
                            />
                            <button onClick={addMemberToWorkspace} className="p-2 text-blue-500 focus:outline-none">
                                Add
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default WorkspaceComponent;
