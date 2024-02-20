import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"

class HouseService {
    async getHouseById(houseId) {
        const house = await dbContext.Houses.findById(houseId)
        if (!house) {
            throw new BadRequest('not an accurate house id')
        }
        return house

    }



    async createHouse(houseData) {
        const house = await dbContext.Houses.create(houseData)
        return house
    }


    async getHouses() {
        const houses = await dbContext.Houses.find()
        return houses
    }

}


export const houseService = new HouseService()