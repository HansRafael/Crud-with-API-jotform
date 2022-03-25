const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jotSchema = new Schema({
    answer_id: {type: String},
    created_at: {type: String},
    answers: {type: []}
});

module.exports = mongoose.model("jotform",jotSchema);