import Joi from "joi";

export const ClientSchemaReg=Joi.object({
    name:Joi.string().required(),
    email:Joi.string().required().email(),
    contact:Joi.string().required(),
    password:Joi.string().required().min(8)

})
export const ClientSchemaLog=Joi.object({
  
    email:Joi.string().required().email(),
    password:Joi.string().required().min(8)
    
})