import mongoose from 'mongoose';




const userSchema = new mongoose.Schema({

    username: {

        type: String,

        required: true,

        unique: true,
    },

    email:{

        type: String,

        required: true,

        unique: true,

    },

    password:{

        type: String,

        required:true,

    },

    }, {timestamps: true}
    //save two things time of creation and updation before connecting new users
);
//after create schema create a model
const User = mongoose.model('User', userSchema);
//export it as a default so we can use it in other places in our application 
//if we need it so model created and we can use it later
export default User;
