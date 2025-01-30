const router = require("express").Router();
const userRoutes = require("../controller/user.controller");
const validate = require("../middlewares/validate.middleware");
const user_ValidationSchema = require("../validatorZOD/user.validator");

router.route("/").get((req, res)=>{
  res.status(200).json({msg: "Hello Akash"})
})

router
  .route("/register")
  .post(validate(user_ValidationSchema), userRoutes.register);
router.route("/login").post(validate(user_ValidationSchema), userRoutes.login);

module.exports = router;
