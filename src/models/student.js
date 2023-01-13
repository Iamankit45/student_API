const mongoose=require('mongoose');

const validator=require('validator');


const studentSchema=new mongoose.Schema({

name:{

    type: String,
    required: true,
    minLength:3,

},
email: {
    type: String,
    required: true,
    unique: [true,"Email Id is already present "],
    Validate(value){

        if (!validator.isEmail(value)) {
            throw new Error('Invalid email');
        }
    }
},

phone:{
    type:Number,
    
    required: true,
    unique: [true,"Phone Number is already present"]

},

address:{

type:String,
required:true,

}




})

//we are creating a new collection
const student=new mongoose.model('student',studentSchema);

module.exports = student;