const userService = require("../service/userService");

class UserController {
  async registration(req, res, next) {
    try {
      console.log(req.body);
      const { username, email, password } = req.body;
      const userData = await userService.registration(username, email, password);
      res.cookie("refreshToken", userData.refreshToken, {
        httpOnly: true,
        expires: new Date(Date.now() + 60 * 60 * 24 * 30 * 1000),
      });
      return res.json(userData);
    } catch (err) {
      console.log(err);
    }
  }
  async activate(req, res, next) {}

  async refresh(req, res, next) {}
}

module.exports = new UserController();
