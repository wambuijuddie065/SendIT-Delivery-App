import Joi from 'joi'
export const ParcelSchema1=Joi.object({
    sender_details: Joi.string().required(),
    receiver_details: Joi.string().required(),
    pick_up: Joi.string().required(),
    destination: Joi.string().required(),
    description: Joi.string().required(),
    weight: Joi.number().required(),
    price: Joi.number().required(),
    status: Joi.string().required(),

})