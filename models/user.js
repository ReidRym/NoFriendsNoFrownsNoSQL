const{Schema, model} = require('mongoose');


const UserSchema = new Schema ({
  userName: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email:{
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
    },
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'Thought'
    }],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }],
},{
    toJSON: {
        virtuals: true,
    }
})
const User = model('user', UserSchema);
model.exports = User;
