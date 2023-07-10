import { Fries } from "../models/Fries"

export const burgers = [
  {
    id: 1,
    name: 'Double Double McCheeseCurd',
    lettuce: false,
    tomatoes: false,
    bacon: true,
    sauce: false,
    price: 12.75,
  },
  {
    id: 2,
    name: 'The Time Stopper',
    lettuce: true,
    tomatoes: true,
    bacon: true,
    sauce: true,
    price: 15.75,
  },
]

export const fries = [
  new Fries({
    id: 1,
    name: 'Loaded Cheese Fries',
    price: 4.75,
    meat: true,
    cheese: true
  }),
  new Fries({
    id: 2,
    name: 'Regular Fries',
    price: 1.75,
    meat: false,
    cheese: false
  }),
]
