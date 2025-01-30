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

