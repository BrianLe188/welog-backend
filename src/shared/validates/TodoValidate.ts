import Joi from "joi";

export const createTodoSchema = Joi.object({
    title: Joi.string().min(0).required(),
    timeline_id: Joi.string().required(),
    above: Joi.number().min(0),
    below: Joi.number().min(0),
});

export const reOrderTodoSchema = Joi.object({
    above: Joi.number().min(0),
    below: Joi.number().min(0),
});
