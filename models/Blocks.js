const mongoose = require("mongoose");

const blocksSchema = new mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    },
    receiver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    },
    status: {
        type: String,
        required: true,
    }
});
blocksSchema.set('timestamps', true);
module.exports = mongoose.model('Blocks', blocksSchema);
