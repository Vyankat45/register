const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const registerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    whatsapp: {
        type: String,
        required: true
    },
    college: {
        type: String,
        required: true
    },
    class: {
        type: String,
        required: true
    }
});

const register = mongoose.model("register", registerSchema);
module.exports = register;
