const mongoose= require('mongoose')

const resultSchema= new mongoose.Schema(
{
  value: Number,
},
{
  timestamp:{
    createdAt: "created_at",
    updateAt: "update_at"
  }
}
)
module.exports= mongoose.model("Result", resultSchema)
