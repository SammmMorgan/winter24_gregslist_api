import { Schema } from "mongoose";

export const HouseSchema = new Schema({

    bedrooms: { type: Number, required: true, max: 500, minlength: 1 },
    bathrooms: { type: Number, required: true, max: 500, minlength: 1 },
    year: { type: Number, required: true, max: 9999, minlength: 1 },
    squareFt: { type: Number, required: true, max: 999999, minlength: 1 },
    price: { type: Number, required: true, max: 999999, minlength: 1 },
    description: { type: String, required: true, maxlength: 500, minlength: 25 },
    imgUrl: { type: String, maxlength: 500 }
}
)

