
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

const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (err) {
    const status = 422;
    const message = "Fill the input properly";
    const extraDetails = err.errors[0].message;

    const error = {
      status,
      message,
      extraDetails,
    };

    console.log(error);
    // res.status(400).json({ msg: message });
    next(error);
  }
};

module.exports = validate;
