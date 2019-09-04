import mongoose from 'mongoose'

let Schema = mongoose.Schema

let _model = new Schema({
  slots: { type: Number, required: true },
  price: { type: Number },
  year: { type: Number },
  description: { type: String },
  imgUrl: { type: String }
})

export default class ToasterService {
  get repository() {
    return mongoose.model('toaster', _model)
  }
}