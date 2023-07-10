import { burgers } from "../db/FakeDB.js"
import { BadRequest } from "../utils/Errors.js"







class BurgerService {

  getBurgers() {
    return burgers
  }


  getBurgerById(burgerId) {
    const foundBurger = burgers.find(burger => burger.id == burgerId)

    if (!foundBurger) {
      throw new BadRequest(`${burgerId} is not a valid ID`)
    }
    return foundBurger
  }

  createBurger(burgerData) {
    burgerData.id = burgers.length + 1

    burgers.push(burgerData)

    return burgerData
  }


  deleteBurger(burgerId) {
    const foundIndex = burgers.findIndex(burger => burger.id == burgerId)

    if (foundIndex == -1)
      throw new BadRequest(`${burgerId} was not valid`)

    burgers.splice(foundIndex, 1)
  }

  updateBurger(burgerId, burgerData) {
    let orderedBurger = this.getBurgerById(burgerId)

    orderedBurger.lettuce = burgerData.lettuce || orderedBurger.lettuce

    orderedBurger.tomatoes = burgerData.tomatoes || orderedBurger.tomatoes

    orderedBurger.sauce = burgerData.sauce || orderedBurger.sauce

    orderedBurger.bacon = burgerData.bacon || orderedBurger.bacon

    return orderedBurger
  }










}








export const burgerService = new BurgerService