import Joi, { ObjectSchema } from "joi";

export const emailSchema: ObjectSchema = Joi.object().keys({
  email: Joi.string().required().email().messages({
    "string.base": "Email must be of type string",
    "string.email": "Email must be valid",
    "string.required": "No Email  provided.",
  }),
});

export const passwordSchema: ObjectSchema = Joi.object().keys({
  password: Joi.string().required().min(4).max(16).messages({
    "string.base": "Password must be of type string",
    "string.min": "Password is too short. It must be 4 characters or more.",
    "string.max": "Password is too long. It must be 16 characters or less.",
    "string.empty": "No Password  provided.",
  }),
  confirmPassword: Joi.string().required().valid(Joi.ref("password")).messages({
    "any.only": "Passwords should match",
    "any.required": "Confirm password is a required field.",
  }),
});
