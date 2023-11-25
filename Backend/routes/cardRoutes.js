const express = require('express');
const router = express.Router();
const validateToken = require('../utils/authentication');
const cardController = require('../controllers/cardController')

router.post('/workspace/:workspaceId/board/:boardId/card',validateToken, cardController.createCard);

router.get('/workspace/:workspaceId/board/:boardId/card',validateToken, cardController.getCardBySpecificBoardId);

module.exports = router;