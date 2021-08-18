const userService = require("../service/user-service");

class UserController {
  async registration(req, res, next) {
    try {
      const { username, email, password } = req.body;
      const userData = await userService.registration(username, email, password);
      res.cookie("refreshToken", userData.refreshToken, {
        httpOnly: true,
        expires: new Date(Date.now() + 60 * 60 * 24 * 30 * 1000),
      });
      return res.json(userData);
    } catch (e) {
      console.error(e);
    }
  }
  async login(req, res, next) {
    try {
    } catch (e) {
      console.error(e);
    }
  }
  async activate(req, res, next) {
    try {
    } catch (e) {
      console.error(e);
    }
  }
  async refresh(req, res, next) {
    try {
    } catch (e) {
      console.error(e);
    }
  }
  // test fun
  async getUsers(req, res, next) {
    try {
      res.json(["username0", "username1"]);
    } catch (e) {
      console.error(e);
    }
  }
}

module.exports = new UserController();
