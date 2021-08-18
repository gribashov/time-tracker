// npm libraries
const bcrypt = require("bcrypt");
// services
const tokenService = require("../service/token-service");
// models
const userModel = require("../models/user-model");

class UserService {
  async registration(username, email, password) {
    // if candidate !== null -> errror already exists
    const candidate = await userModel.find({ email });
    if (candidate.email) {
      throw new Error(`User ${email} already exists`);
    }
    // generate password and activation link
    const hashPassword = await bcrypt.hash(password, 3); //hash password
    // add user and save in db
    const user = await userModel.create({ username, email, password: hashPassword }); // create user

    const tokens = tokenService.generateToken({ ...user }); // generate unique tokens -> [access, refresh] for user
    await tokenService.saveToken(user.id, tokens.refreshToken); // save refresh tokens in db

    return {
      ...tokens,
      user: user,
    };
  }
}

module.exports = new UserService();
