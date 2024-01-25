import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema({
    content:{
        type:String,
        required:true,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "User",
      required: true,
    },
    todo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Todo",
        required: true,
      },
},
    { timestamps: true })

   

    const Note = mongoose.model("Note",NoteSchema)

     export default Note