import { burgerService } from "../services/BurgerService.js";
import BaseController from "../utils/BaseController.js";



export class BurgerController extends BaseController {
  constructor() {
    super('api/burgers')
    this.router
      .get('', this.getBurgers)
      .get('/:burgerId', this.getBurgerById)
      .post('', this.createBurger)
      .delete('/:burgerId', this.deleteBurger)
      .put('/:burgerId', this.updateBurger)
  }

  async getBurgers(req, res, next) {
    try {
      const burgers = await burgerService.getBurgers()
      res.send(burgers)
    } catch (error) {
      next(error)

    }
  }

  async getBurgerById(req, res, next) {
    try {
      const burgerId = req.params.burgerId

      const burger = await burgerService.getBurgerById(burgerId)
      res.send(burger)
    } catch (error) {
      next(error)
    }
  }

  async createBurger(req, res, next) {
    try {
      const burgerData = req.body
      const burger = await burgerService.createBurger(burgerData)
      res.send(burger)
    } catch (error) {
      next(error)

    }
  }

  async deleteBurger(req, res, next) {
    try {
      const burgerId = req.params.burgerId
      await burgerService.deleteBurger()
      res.send('No longer serving that burger')
    } catch (error) {
      next(error)
    }
  }

  async updateBurger(req, res, next) {
    try {
      const burgerId = req.params.burgerId

      const burgerData = req.body

      const updateBurger = await burgerService.updateBurger(burgerId, burgerData)

      res.send(updateBurger)
    } catch (error) {
      next(error)
    }
  }

}