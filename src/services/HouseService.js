import { dbContext } from "../db/DbContext.js"

class HouseService {
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