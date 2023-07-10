import { burgers } from "../db/FakeDB.js"
import { BadRequest } from "../utils/Errors.js"





class BurgerService {

  getBurgers() {
    return burgers

  }


  // getBurgerById(burgerId) {
  //   const foundBurger = burgers.find(burger => burger.id == burgerId)

  //   if (!foundBurger) {
  //     throw new BadRequest(`${burgerId} is not a valid ID`)
  //   }
  //   return foundBurger
  // }











}








export const burgerService = new BurgerService