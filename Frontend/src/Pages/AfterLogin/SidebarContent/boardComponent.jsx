// import React from 'react'

// const BoardComponent = () => {
//   return (
//     <div>
//       <div className='flex flex-col items-start ml-16 mt-16'>
//         <h1 className='text-lg text-gray-500 font-bold'>YOUR WORKSPACES</h1>
//         <p className='text-sm text-gray-300 font-normal mt-4'>You have not created any workspace yet.</p>
//       </div>
//       <div>
//       </div>
//     </div>
//   )
// }

// export default BoardComponent
import React, { useState } from 'react';

const BoardComponent = () => {
  const [workspaces, setWorkspaces] = useState([]);

  // Function to add a workspace
  const addWorkspace = () => {
    const newWorkspace = {
      name: 'New Workspace',
      image: 'path_to_image.jpg', // Replace with actual image path
    };
    setWorkspaces([...workspaces, newWorkspace]);
  };

  return (
    <div>
      <div className='flex flex-col items-start ml-16 mt-16'>
        <h1 className='text-lg text-gray-500 font-bold'>YOUR WORKSPACES</h1>
        {workspaces.length === 0 ? (
          <p className='text-sm text-gray-300 font-normal mt-4'>You have not created any workspace yet.</p>
        ) : (
          <div className='grid grid-cols-3 gap-4 mt-4'>
            {workspaces.map((workspace, index) => (
              <div key={index} className='bg-gray-200 rounded-lg p-4'>
                <img src={workspace.image} alt={workspace.name} className='w-full h-24 object-cover rounded mb-2' />
                <p className='text-sm font-semibold'>{workspace.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BoardComponent;

