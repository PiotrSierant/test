import { Schema, model, models } from "mongoose"
const UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: [true, "Email is required"],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Invalid email address"],
        index: true,
    },
    name: {
        type: String,
        index: true,
    },
    surname: {
        type: String,
        index: true,
        default: "",
    },
    password: {
        type: String,
        select: false
    },
    roles: {
        type: [String],
        default: ["user"],
        index: true,
    },
    image: {
        type: String,
        default: "",
    },
    bio: {
        type: String,
        default: "",
    },
    phone: {
        type: String,
        default: "",
    }
}, { timestamps: true })

const User = models.User || model("User", UserSchema)

export default User