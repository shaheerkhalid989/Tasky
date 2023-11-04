const mongoose = require('mongoose');

// This schema shows that in which workspace board is added
const boardSchema = new mongoose.Schema({
    workspaceId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Workspace',
        required: true,
        default : null
    },
    BoardName: {
        type: String,
        required: true,
    },
}, {timestamps: true});

module.exports = mongoose.model('Board', boardSchema);