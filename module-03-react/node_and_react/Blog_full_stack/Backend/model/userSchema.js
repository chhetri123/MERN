const mongoose = require("mongoose");

const user = mongoose.Schema({
  username: {type:String,
    required:true,
    unique:true
  }, // The user's chosen username (required, unique)
  email:{type:String,
    required:true,
    unique:true
  }, // User's email (required, unique)
  password: {type:String,
    select: false
  },
  confirmPassword:String, // Hashed password (required)
  createdAt: {type:Date,
    default: new Date
  }, // Date when the user was created
});

const userSchema = mongoose.model("user", user);

module.exports= userSchema;