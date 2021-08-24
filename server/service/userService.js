const bcrypt = require("bcrypt");
const uuid = require("uuid");

const userModel = require("../models/userModel");

const tokenService = require("./tokenService");
const mailService = require("./mailService");

const UserDto = require("../dtos/userDto");

class UserService {
  async registration(username, email, password) {
    const candidate = await userModel.findOne({
      $or: [{ username: username }, { email: email }],
    });

    // already exists?
    if (candidate) {
      if (candidate.email === email) {
        throw new Error({ message: `User with email ${email} already exists` });
      }
      if (candidate.username === username) {
        throw new Error({ message: `User with username ${username} already exists` });
      }
    }

    const hashPassword = await bcrypt.hash(password, 3);
    const activationLink = uuid.v4();

    const user = await userModel.create({
      username,
      email,
      password: hashPassword,
      activationLink,
    });
    await mailService.sendActivationMail(
      email,
      `${process.env.API_URL}/user/activate/${activationLink}`,
    );
    const userDto = new UserDto(user);

    const tokens = tokenService.generateToken({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto,
    };
  }
}

module.exports = new UserService();
