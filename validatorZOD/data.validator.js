const { z } = require("zod");

const data_ValidationSchema = z.object({
  userId: z.string({ required_error: "Must need ID" }).trim().nonempty(),
  title: z.string({ required_error: "Must have title" }).trim().nonempty(),
  description: z
    .string({ required_error: "Least 10 char" })
    .trim()
    .nonempty()
    .min(10),
});

module.exports = data_ValidationSchema;


// const validate = (req, res, next) => {
//   const result = bodySchema.safeParse(req.body);

//   if (!result.success) {
//     return res.status(400).json({
//       status: "error",
//       message: "Bad request! Validation failed.",
//       errors: result.error.errors, // Access the validation errors
//     });
//   }

//   next();
// };
