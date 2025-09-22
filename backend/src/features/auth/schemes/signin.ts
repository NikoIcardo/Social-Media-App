import Joi, { ObjectSchema } from "joi";

export const signinSchema: ObjectSchema = Joi.object().keys({
  username: Joi.string().required().min(4).max(16).messages({
    "string.base": "Username must be of type string",
    "string.min": "Username is too short. It must be 4 characters or more.",
    "string.max": "Username is too long. It must be 16 characters or less.",
    "string.empty": "No Username  provided.",
  }),
  password: Joi.string().required().min(4).max(16).messages({
    "string.base": "Password must be of type string",
    "string.min": "Password is too short. It must be 4 characters or more.",
    "string.max": "Password is too long. It must be 16 characters or less.",
    "string.empty": "No Password  provided.",
  }),
});
