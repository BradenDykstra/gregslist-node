import mongoose from "mongoose"
const Schema = mongoose.Schema

const _model = new Schema({
    make: { type: String, required: true },
    model: { type: String, required: true },
    price: { type: Number },
    year: { type: Number },
    imgUrl: { type: String },
    description: { type: String }
}, { timestamps: true })

export default class CarService {
    get repository() {
        return mongoose.model('car', _model)
    }
}