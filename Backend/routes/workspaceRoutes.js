const express = require('express');
const router = express.Router();
const workspaceControllers = require('../controllers/workspaceController');
const memberControllers = require('../controllers/memberController');
const validateToken = require('../utils/authentication');
const workspaceSchema = require('../validator/workspaceValidation');
const validate = require('../middleware/validate_middleware');
const tokenExpiration = require('../utils/tokenExpiration')

// const Member = require('../models/memberModel');
// const axios = require('axios');

// router.post('/workspace',tokenExpiration, validateToken, workspaceControllers.createWorkspace);

router.post('/workspace', validateToken, workspaceControllers.createWorkspace);

router.get('/workspace', validateToken, workspaceControllers.getAllWorkspaces);

router.post('/workspace/delete/:workspaceName', validateToken, workspaceControllers.deleteWorkspaceByName);

router.post('/member', memberControllers.addMember);

module.exports = router;