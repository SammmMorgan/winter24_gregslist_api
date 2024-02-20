import { houseService } from "../services/HouseService.js";
import BaseController from "../utils/BaseController.js";

export class HousesController extends BaseController {
    constructor() {
        super('api/houses')
        this.router
            .get('', this.getHouses)
            .post('', this.createHouse)
            .get('/:houseId', this.getHouseById)
            .put('/:houseId', this.editHouse)
            .delete('/:houseId', this.obliterateHouse)

    }


    /**
 * @param {import("express").Request} request
 * @param {import("express").Response} response
 * @param {import("express").NextFunction} next
 */
    async getHouses(request, response, next) {
        try {
            const houses = await houseService.getHouses()
            response.send(houses)
        } catch (error) {
            next(error)
        }
    }

    /**
    * @param {import("express").Request} request
    * @param {import("express").Response} response
    * @param {import("express").NextFunction} next
    */

    async createHouse(request, response, next) {
        try {
            const houseData = request.body
            const house = await houseService.createHouse(houseData)
            response.send(house)
        } catch (error) {
            next(error)
        }
    }

    /**
    * @param {import("express").Request} request
    * @param {import("express").Response} response
    * @param {import("express").NextFunction} next
    */
    async getHouseById(request, response, next) {
        try {
            const houseId = request.params.houseId
            const house = await houseService.getHouseById(houseId)
            response.send(house)
        } catch (error) {
            next(error)
        }
    }

    /**
    * @param {import("express").Request} request
    * @param {import("express").Response} response
    * @param {import("express").NextFunction} next
    */

    async editHouse(request, response, next) {
        try {
            const house = request.params.houseId
            const houseData = request.body
            const changedHouse = await houseService.editHouse(house, houseData)
            response.send(changedHouse)
        } catch (error) {
            next(error)
        }
    }

    /**
    * @param {import("express").Request} request
    * @param {import("express").Response} response
    * @param {import("express").NextFunction} next
    */
    async obliterateHouse(request, response, next) {
        try {
            const house = request.params.houseId
            const houseToBeGoned = await houseService.obliterateHouse(house)
            response.send('it is gone!')
        } catch (error) {
            next(error)
        }

    }
}

