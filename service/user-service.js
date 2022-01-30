const UserModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const tokenService = require("../service/token-service");
const UserDto = require("../dtos/user-dto");

class UserService {
  async registration(name, surname, email, password) {
    const candidate = await UserModel.findOne({ where: { email: email } });
    if (candidate) {
      throw new Error("Пользователь уже существует");
    }

    const hashPassword = await bcrypt.hash(password, 3);
    const user = UserMosel.create({
      name: name,
      surname: surname,
      email: email,
      password: hashPassword,
    });

    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto,
    };
  }
}

module.exports = new UserService();
