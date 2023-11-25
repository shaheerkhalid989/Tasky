// import React, { useState } from 'react';

// const AddSpaceDialog = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [inputValue, setInputValue] = useState('');
//   const [selectedOption, setSelectedOption] = useState('');

//   const openDialog = () => {
//     setIsOpen(true);
//   };

//   const closeDialog = () => {
//     setIsOpen(false);
//   };

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleSelectChange = (e) => {
//     setSelectedOption(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Do something with the input value and selected option, like sending it to an API or updating state in your app
//     console.log('Input Value:', inputValue);
//     console.log('Selected Option:', selectedOption);
//     // Reset the values and close the dialog
//     setInputValue('');
//     setSelectedOption('');
//     closeDialog();
//   };

//   return (
//     <div>
//       <button
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         onClick={openDialog}
//       >
//         Add Space
//       </button>
//       {isOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-80">
//             <h2 className="text-lg font-semibold mb-4">Add Space</h2>
//             <form onSubmit={handleSubmit}>
//               <div className="mb-4">
//                 <label htmlFor="input" className="block text-sm font-medium text-gray-700">
//                   Input:
//                 </label>
//                 <input
//                   type="text"
//                   id="input"
//                   value={inputValue}
//                   onChange={handleInputChange}
//                   className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="select" className="block text-sm font-medium text-gray-700">
//                   Select Option:
//                 </label>
//                 <select
//                   id="select"
//                   value={selectedOption}
//                   onChange={handleSelectChange}
//                   className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full"
//                 >
//                   <option value="">Select...</option>
//                   <option value="Option 1">Option 1</option>
//                   <option value="Option 2">Option 2</option>
//                   <option value="Option 3">Option 3</option>
//                 </select>
//               </div>
//               <div className="flex justify-end">
//                 <button
//                   type="button"
//                   onClick={closeDialog}
//                   className="mr-2 bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                 >
//                   Add
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

import React, { useState } from 'react';

const DialogBox = ({ onClose, onAdd }) => {
    const [workspaceName, setWorkspaceName] = useState('');

    const handleInputChange = (event) => {
        setWorkspaceName(event.target.value);
    };

    const handleAddWorkspace = () => {
        onAdd(workspaceName);
        onClose();
    };

    return (
        <div className="dialog-container">
            <input type="text" value={workspaceName} onChange={handleInputChange} />
            <button onClick={handleAddWorkspace}>Add Workspace</button>
            <button onClick={onClose}>Cancel</button>
        </div>
    );
};

export default DialogBox;

// export default AddSpaceDialog;
// import React, { useState } from 'react';

// const DialogBox = ({ onClose }) => {
//   const [inputValue, setInputValue] = useState('');
// //   const [workspaces, setWorkspaces] = useState(['Workspace 1']);

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };


//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle input value, maybe add workspace or perform other actions
//     console.log('Input Value:', inputValue);
//     // Clear the input field
//     setInputValue('');
//     // Close the dialog
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-80">
//         <h2 className="text-lg font-semibold mb-4">Add Workspace</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="input" className="block text-sm font-medium text-gray-700">
//               Workspace Name:
//             </label>
//             <input
//               type="text"
//               id="input"
//               value={inputValue}
//               onChange={handleInputChange}
//               className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full"
//             />
//           </div>
//           <div className="flex justify-end">
//             <button
//               type="button"
//               onClick={onClose}
//               className="mr-2 bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               onClick={handleSubmit}
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//             >
//               Add
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default DialogBox;

