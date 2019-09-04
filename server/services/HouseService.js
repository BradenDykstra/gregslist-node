import mongoose from 'mongoose'
const Schema = mongoose.Schema

const _model = new Schema({
  levels: { type: Number, required: true },
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  description: { type: String },
  imgUrl: { type: String },
  price: { type: Number },
  year: { type: Number }
}, { timestamps: true })

export default class HouseService {
  get repository() {
    return mongoose.model('house', _model)
  }
}