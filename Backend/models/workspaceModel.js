const mongoose = require('mongoose');

const workspaceSchema = new mongoose.Schema({
    UserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    WorkspaceName: {
        type: String,
        required: true,
    },
    WorkspaceDescription: {
        type: String,
        default: null, // Allow null values for WorkspaceDescription
    },
    BoardName: {
        type: String,
        default: null, // Allow null values for BoardName
    },
    // member when added in workspaces will get his id from member table
    // MemberId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Member',
    //     default: null, // Allow null values for MemberId
    // },
}, {timestamps : true});


module.exports = mongoose.model('Workspace', workspaceSchema);
