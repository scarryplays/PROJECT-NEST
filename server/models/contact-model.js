const {Schema, model}= require("mongoose");
const contactSchema = new Schema({
    // username: {type: String, required:true},
    name:{type: String, required:true},
    email:{type: String, required:true},
    // phone:{type: =num, required:true},
    phone:{type: String, required:true},
    message:{type: String, required:true}
});
const Contact = new model("Contact", contactSchema);
module.exports = Contact;




// const { Schema, model } = require("mongoose");

// const contactSchema = new Schema({
//   username: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   message: {
//     type: String,
//     required: true,
//     trim: true,
//   },
// });

// const Contact = model("Contact", contactSchema);
// module.exports = Contact;
