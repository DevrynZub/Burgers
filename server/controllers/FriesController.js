import { friesService } from "../services/FriesService.js";
import BaseController from "../utils/BaseController.js";



export class FriesController extends BaseController {
  constructor() {
    super('api/fries')
    this.router
      .get('', this.getFries)
  }

  async getFries(req, res, next) {
    try {
      const fries = await friesService.getFries()
      res.send(fries)
    } catch (error) {
      next(error)

    }
  }






}
