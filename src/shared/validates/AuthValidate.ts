import Joi from "joi";

export const registerAndLoginSchema = Joi.object({
    email: Joi.string().required().messages({
        "any.required": "Email is a required field",
    }),
    password: Joi.string().required().messages({
        "any.required": "Password is a required field",
    }),
    account_type: Joi.string().optional(),
});
