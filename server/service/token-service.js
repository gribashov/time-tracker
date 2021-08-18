// npm libraries
const jwt = require("jsonwebtoken");
// models
const tokenModel = require("../models/token-model");

class TokenService {
  // secret data in token [header] [data] [signature]
  generateToken(payload) {
    // data , secret key , options for generate token
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET_KEY, { expiresIn: "30m" });
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET_KEY, {
      expiresIn: "30d",
    });
    return {
      accessToken,
      refreshToken,
    };
  }
  // save refresh token in db for unique user (id user, refresh token)
  async saveToken(userId, refreshToken) {
    // if user finded in token-model -> in refreshToken field put refreshToken and save() in db fo update refreshToken
    const tokenData = await tokenModel.findOne({ user: userId });
    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return tokenData.save();
    }
    // else -> user first login -> create tokenModel with user id
    const token = await tokenModel.create({ user: userId, refreshToken });
    return token;
  }
}

module.exports = new TokenService();
