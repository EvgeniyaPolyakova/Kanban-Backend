const userService = require("../service/user-service");

class UserController {
  async registration(req, res, next) {
    try {
      const { name, surname, email, password } = req.body;
      const userData = userService.registration(name, surname, email, password);
      res.cookie("refreshTolen", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.json(userData);
    } catch (e) {}
  }

  async login(req, res, next) {
    try {
    } catch (e) {}
  }

  async logout(req, res, next) {
    try {
    } catch (e) {}
  }

  async refresh(req, res, next) {
    try {
    } catch (e) {}
  }

  async getUsers(req, res, next) {
    try {
      res.json(["123", "456"]);
    } catch (e) {}
  }
}

module.exports = new UserController();
