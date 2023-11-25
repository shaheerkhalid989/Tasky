const mongoose = require('mongoose');

// This schema shows that in which board card is added
const cardSchema = mongoose.Schema({
    boardId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Board',
    },
    cardName: { type: String, required: true },
    dueDate: { type: Date, default: null },
}, {timestamps: true});

module.exports = mongoose.model('Card', cardSchema);