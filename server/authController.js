const User = require("./models/User");
const Role = require("./models/Role");

class authController {
  async registration(req, res) {
    try {
    } catch (e) {
      console.error(e);
    }
  }

  async login(req, res) {
    try {
    } catch (e) {
      console.error(e);
    }
  }

  async getUsers(req, res) {
    try {
      const userRole = new Role();
      const adminRole = new Role({value: "admin"});
      await userRole.save();
      await adminRole.save();
      res.json("server working...");
    } catch (e) {
      console.error(e);
    }
  }
}

module.exports = new authController();
