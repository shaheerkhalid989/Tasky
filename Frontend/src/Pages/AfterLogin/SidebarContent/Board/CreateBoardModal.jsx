import React, { useState } from 'react';

const CreateBoardModal = ({ isOpen, onClose, addBoard }) => {
  const [boardName, setBoardName] = useState('');
  const [boardDesc, setBoardDesc] = useState('');
  const [showRequiredError, setShowRequiredError] = useState(false);


  const handleInputChange = (e) => {
    setBoardName(e.target.value);
  };

  const handleCreateBoard = (event) => {
    event.preventDefault();
    if (boardName.trim() !== '') {
      addBoard(boardName);
      onClose();
      setBoardName('');
    }
    else {
      setShowRequiredError(true);
      setTimeout(() => {
        setShowRequiredError(false);
      }, 3000);
    }
  };

  const handleCloseModal = () => {
    onClose(); // Call the function to close the modal
};

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          {/* Modal Content */}
          <div className="relative w-11/12 my-6 mx-auto max-w-3xl">
            <div className="text-md font-normal bg-gray-500 rounded-lg shadow-lg relative flex flex-col p-6">
              <h1 className="text-2xl text-gray-200 font-semibold mb-4">Create Board</h1>
              <input
                type="text"
                value={boardName}
                onChange={handleInputChange}
                placeholder="Enter board name"
                className="text-gray-100 border border-gray-300 bg-transparent rounded px-3 py-2 mb-4 focus:outline-none"
              />
              <input
                type="text"
                value={boardDesc}
                onChange={(e) =>setBoardDesc(e.target.value)}
                placeholder="Enter description"
                className="text-gray-100 border border-gray-300 bg-transparent rounded px-3 py-2 mb-4 focus:outline-none"
              />
              <div className="flex justify-end">
                <button
                  onClick={handleCreateBoard}
                  className="bg-gray-500 text-white px-4 py-2 rounded focus:outline-none"
                >
                  Create
                </button>
              </div>
              {showRequiredError && (
                    <p className='text-gray-100'>Board name is required!</p>
                )}
              <div className="modal-box">
                <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={handleCloseModal}>✕</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black opacity-50"></div>
      )}
    </>
  );
};

export default CreateBoardModal;
