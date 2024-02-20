import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"

class HouseService {
    async obliterateHouse(house) {
        const houseToBeGoned = await this.getHouseById(house)

        await houseToBeGoned.deleteOne()

        return

    }


    async editHouse(house, houseData) {
        const houseUpdating = await this.getHouseById(house)

        houseUpdating.description = houseData.description || houseUpdating.description
        houseUpdating.bedrooms = houseData.bedrooms || houseUpdating.bedrooms
        houseUpdating.bathrooms = houseData.bathrooms || houseUpdating.bathrooms
        houseUpdating.squareFt = houseData.squareFt || houseUpdating.squareFt
        houseUpdating.price = houseData.price || houseUpdating.price
        houseUpdating.imgUrl = houseData.imgUrl || houseUpdating.imgUrl

        await houseUpdating.save()

        return houseUpdating

    }



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