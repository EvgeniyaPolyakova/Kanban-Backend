const jwt = require("jsonwebtoken");
// const UserMosel = require("../models/user-model");

class TokenService {
  generateTokens(payload) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
      expiresIn: "30m",
    });
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
      expiresIn: "30d",
    });
    return {
      accessToken,
      refreshToken,
    };
  }

  async saveToken(userId, refreshToken) {
    const tokenData = UserMosel.findOne({ where: { id: userId } });
    if (tokenData) {
      tokenData.token = refreshToken;
      return tokenData.save();
    } else {
      throw new Error("Пользователь еще не зарегистрирован");
    }
  }
}

module.exports = new TokenService();
