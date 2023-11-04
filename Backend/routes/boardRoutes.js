const express = require('express');
const router = express.Router();
const validateToken = require('../utils/authentication');
const boardController = require('../controllers/boardController');

router.post('/workspace/:workspaceId/board',validateToken, boardController.createBoard);

router.get('/workspace/:workspaceId/board',validateToken, boardController.getBoardsByWorkspaceId);

module.exports = router;