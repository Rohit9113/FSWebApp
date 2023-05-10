const mongoose = require("mongoose")

const user = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  username:{
    type:String,
    required: true
  },
  password:{
    type:String,
    required:true
  },
  confpassword:{
    type:String,
    required:true
  }
})

module.exports = mongoose.model("user", user)
