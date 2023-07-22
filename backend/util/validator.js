class Validator {
  isValidSponcerId(id) {
    if (!(id.length === 5)) {
      return false;
    }
    if (isNaN(id.substr(2, 5))) {
      return false;
    }
    return true;
  }
}

module.exports = new Validator();
