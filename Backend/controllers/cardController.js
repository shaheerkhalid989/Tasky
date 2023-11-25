const Card = require('../models/boardHandling/cardModel');

module.exports = {
    createCard,
    getCardBySpecificBoardId,
}


async function createCard(req, res) {
    try {
        const { cardName, DueDate } = req.body;
        const workspaceId = req.params.workspaceId;
        const boardId = req.params.boardId;

        // Check if the provided board ID and workspace ID exist and are valid
        // const workspace = await Workspace.findOne(workspaceId);
        // if (!workspace) {
        //     return res.status(404).json({ msg: 'Workspace not found' });
        // }

        // Check if the board exists and is associated with the specified workspace
        // const board = await Card.findOne({ _id: boardId, workspaceId: workspaceId });
        // console.log(workspaceId);
        // console.log(board);
        // if (!board) {
        //     return res.status(404).json({ msg: 'Board not found in the specified workspace' });
        // }


        const newCard = await Card.create({
            boardId: boardId,
            cardName: cardName,
            dueDate: DueDate,
        });

        return res.status(201).json({ msg: 'Card created successfully', card: newCard });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}

async function getCardBySpecificBoardId(req, res) {
    try {
        const boardId = req.params.boardId; // Assuming the parameter name is boardId

        // Retrieve cards based on the provided board ID
        const cards = await Card.find({ boardId }); // Assuming the field in the Card model for board ID is 'boardId'

        if (!cards || cards.length === 0) {
            return res.status(404).json({ message: 'No cards found for the provided board ID' });
        }

        // Return the retrieved cards
        return res.status(200).json({ cards });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

