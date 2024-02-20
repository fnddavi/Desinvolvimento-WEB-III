import mongoose, {Schema} from "mongoose";

const USerSchema = new Schema({
    mail:{
        type: String
    },
    password:{
        type: String
    },
});
//

const User = mongoose.model("User", USerSchema);

export {User};
