import { fries } from "../db/FakeDB"
import { Fries } from "../models/Fries"


export class FriesService {
  getFries() {
    return fries
  }
}

export const friesService = new FriesService()