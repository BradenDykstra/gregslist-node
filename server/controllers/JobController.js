import express from 'express'
import JobService from '../services/JobService';

let _js = new JobService().repository

export default class JobController {
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
      let data = await _js.find({})
      return res.send(data)
    } catch (error) { next(error) }
  }

  async getOne(req, res, next) {
    try {
      let data = await _js.find(res.param.id)
      if (!data) {
        throw new Error("Invalid ID")
      }
      return res.send(data)
    } catch (error) { next(error) }
  }

  async create(req, res, next) {
    try {
      let data = await _js.create(req.body)
      return res.send(data)
    } catch (error) { next(error) }
  }

  async edit(req, res, next) {
    try {
      let data = await _js.findOneAndUpdate({ _id: req.params.id, }, req.body, { new: true })
      if (!data) {
        throw new Error("Invalid ID")
      }
      return res.send(data)
    } catch (error) { next(error) }
  }

  async delete(req, res, next) {
    try {
      let data = await _js.findOneAndDelete(req.params.id)
      if (!data) {
        throw new Error("Invalid ID")
      }
      return res.send(data)
    } catch (error) { next(error) }
  }
}