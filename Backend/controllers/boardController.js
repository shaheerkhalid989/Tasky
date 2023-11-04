const Board = require('../models/boardHandling/boardModel');

module.exports = {
    createBoard,
    getBoardsByWorkspaceId,
};

async function createBoard(req, res){
    try{
        const {BoardName} = req.body;
        const workspaceId = req.params.workspaceId;

        const boardExist = await Board.findOne({BoardName, workspaceId});

        if(boardExist != null){
            if(BoardName === boardExist.BoardName){
                return res.status(409).json({message: "This board already exist in this workspace"})
            }
        }
        else {
            // Create a new board in the specified workspace
            const newBoard = await Board.create({
                workspaceId,
                BoardName,
            });
            if(!newBoard) return res.status(401).json({msg: "Failed to create User"});

            res.status(200).json({ msg: "Board created successfully", board: newBoard.BoardName });
        }
    }catch(err){
        return res.status(401).json({message: err});
    }
}


async function getBoardsByWorkspaceId(req, res) {
    try {
        const workspaceId = req.params.workspaceId;
        
        const boards = await Board.find({ workspaceId }); // Fetch boards based on the provided workspace ID

        if (!boards || boards.length === 0) {
            return res.status(404).json({ msg: 'No boards found for this workspace' });
        }

        // If boards are found, send them as a JSON response
        return res.status(200).json({ boards });
    } catch (err) {
        // Handle any errors that occur during the process
        return res.status(500).json({ error: err.message });
    }
}
