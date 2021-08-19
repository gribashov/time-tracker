// npm libraries
const bcrypt = require("bcrypt");
// services
const tokenService = require("../service/token-service");
// models
const userModel = require("../models/user-model");

class UserService {
  async registration(username, email, password) {
    const candidate = await userModel.findOne({ $or: [{ username: username }, { email: email }] });

    console.log(candidate);

    if (candidate) {
      if (candidate.email === email) {
        throw new Error(`User with email: ${email} already exists`);
      }
      if (candidate.username === username) {
        throw new Error(`User with username: ${username} already exists`);
      }
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
