const UserModel = require("../models/user.model");

const register = async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, password } = req.body;

    const userExist = await UserModel.findOne({ email });

    if (userExist)
      return res.status(400).json({ message: "email already exists" });

    const userCreated = await UserModel.create({
      username,
      email,
      password,
    });

    res.status(201).json({
      msg: "Registration successful",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
    next(error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await UserModel.findOne({ email });
    console.log(userExist);

    if (!userExist) {
      return res.status(400).json({ message: "Invalid Credentials " });
    }

    // const user = await bcrypt.compare(password, userExist.password);
    const user = await userExist.comparePassword(password);

    if (user) {
      res.status(200).json({
        msg: "Login Successful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json("internal server error");
  }
};

module.exports = { register, login };
