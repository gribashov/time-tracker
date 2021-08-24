const jwt = require("jsonwebtoken");

const tokenModel = require("../models/tokenModel");

class TokenService {
  generateToken(payload) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, { expiresIn: "30m" });
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, { expiresIn: "30d" });
    return {
      accessToken,
      refreshToken,
    };
  }
  // save refresh token in db for unique user (id user, refresh token)
  async saveToken(userId, refreshToken) {
    const tokenData = await tokenModel.findOne({ user: userId });
    // if user finded in token-model -> in refreshToken field put refreshToken and save() in db fo update refreshToken
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
