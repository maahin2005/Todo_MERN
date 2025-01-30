const { z } = require("zod");

const user_ValidationSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at lest of 3 chars. " })
    .max(255, { message: "Name must not be more than 255 characters" }),

  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .min(5, { message: "Email must be at lest of 40 chars. " })
    .max(50, { message: "Email must not be more than 50 characters" }),

  password: z
    .string({ required_error: "description is required" })
    .trim()
    .min(2, { message: "password must be at lest of 3 chars. " })
    .max(255, { message: "password must not be more than 255 characters" }),
});

module.exports = user_ValidationSchema;


// ! need to modify later once application is ready 
// ? create two schemas' for singup / email, pass, name
// ?                         login / email, pass
// ?                         current checks with name too, sorry