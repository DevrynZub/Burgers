import { burgerService } from "../services/BurgerService.js";
import BaseController from "../utils/BaseController.js";



export class BurgerController extends BaseController {
  constructor() {
    super('api/burgers')
    this.router
      .get('', this.getBurgers)
    // .get('/:burgerId', this.getBurgerById)

  }

  async getBurgers(req, res, next) {
    try {
      const burgers = await burgerService.getBurgers()
      res.send('Do I see burgers?', burgers)
    } catch (error) {
      next(error)

    }
  }

  // async getBurgerById(req, res, next) {
  //   try {
  //     const burgerId = req.paras.burgerId

  //     const burger = await burgerService.getBurgerById(burgerId)
  //     res.send(burger)
  //   } catch (error) {
  //     next(error)
  //   }
  // }

}