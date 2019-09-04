import express from 'express'
import ToasterService from '../services/ToasterService';

let _ts = new ToasterService().repository

export default class ToasterController {
  constructor() {
    this.router = express.Router()
      .get('', this.getAll)
      .get('/:id', this.getOne)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.delete)
  }

  async getAll(req, res, next) {
    try {
      let data = await _ts.find({})
      return res.send(data)
    } catch (error) { next(error) }
  }

  async getOne(req, res, next) {
    try {
      let data = await _ts.findById(req.params.id)
      return res.send(data)
    } catch (error) { next(error) }
  }

  async create(req, res, next) {
    try {
      let data = await _ts.create(req.body)
      return res.send(data)
    } catch (error) { next(error) }
  }

  async edit(req, res, next) {
    try {
      let data = await _ts.findOneAndUpdate({ _id: req.params.id, }, req.body, { new: true })
      return res.send(data)
    } catch (error) { next(error) }
  }

  async delete(req, res, next) {
    try {
      let data = await _ts.findOneAndRemove({ _id: req.params.id })
      return res.send(data)
    } catch (error) { next(error) }
  }
}