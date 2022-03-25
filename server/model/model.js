const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PostSchema = new Schema ({
    name : {
        type : String,
        required: true
    },
    url : {
        type:[String],
        required: true
    },
    cpf : {
        type: String,
        required: true,
        unique: true
    },
    status : String
});

const Userdb = mongoose.model('Posts', PostSchema);

module.exports = Userdb;


