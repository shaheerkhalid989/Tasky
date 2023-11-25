const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
    // memberId: {
    //     type: Number,
    //     unique: true,
    //     index: true,
    //     autoIncrement: true,
    // },
    email: {
        type: String,
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        default : null
    },
    workspaceId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Workspace',
        required: true,
        default : null
    },
}, {timestamps : true});


module.exports = mongoose.model('Member', memberSchema);
