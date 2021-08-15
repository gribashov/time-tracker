const User = require("./models/User");
const Role = require("./models/Role");
const bcrypt = require("bcrypt");

class authController {
  async registration(req, res) {
    try {
      const {username, password} = req.body;
      // find user with username
      const candidate = await User.findOne({username});
      // is user finded -> print error
      if (candidate) {
        return res.status(400).json({message: "User already exists"});
      }
      // else -> hash password
      const hashPassword = bcrypt.hashSync(password, 7);
      // -> find role
      const userRole = Role.findOne({value: "user"});
      // -> create user
      const user = new User({
        username,
        password: hashPassword,
        roles: [userRole.value],
      });
      // -> save in db
      await user.save();
      // -> print successfully response
      return res.json({message: "User registered successfully"});
    } catch (e) {
      console.error(e);
      res.status(400).json({message: "Registration error"});
    }
  }

  async login(req, res) {
    try {
    } catch (e) {
      console.error(e);
      res.status(400).json({message: "Login error"});
    }
  }

  async getUsers(req, res) {
    try {
      // add roles in db
      // const userRole = new Role();
      // const adminRole = new Role({value: "admin"});
      // await userRole.save();
      // await adminRole.save();
      res.json("Server working...");
    } catch (e) {
      console.error(e);
    }
  }
}

module.exports = new authController();
