const express = require('express');
const router = express.Router();
const memberControllers = require('../controllers/memberController');
const validateToken = require('../utils/authentication');
// const Member = require('../models/memberModel');
// const axios = require('axios');

router.post('/workspace/:workspaceId/member', validateToken, memberControllers.addMember);

router.get('/workspace/:workspaceId/member', validateToken, memberControllers.getAllMember);

router.delete('/workspaces/:workspaceId/members/:memberId', validateToken, memberControllers.deleteAnyMember);

// router.delete('/members/:memberId', validateToken, memberControllers.deleteAnyMember);


module.exports = router;