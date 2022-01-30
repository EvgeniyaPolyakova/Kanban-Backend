module.exports = class UseDto {
  email;
  id;

  constructor(model) {
    this.email = model.email;
    this.id = model.id;
  }
};
