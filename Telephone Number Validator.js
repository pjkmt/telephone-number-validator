function telephoneCheck(str) {
  if (str.indexOf("(") === -1 && str.indexOf(")") > -1) {
    return false;
  }

  if (str[0] === "-") {
    return false;
  }

  if (str.indexOf(")") - str.indexOf("(") >= 5) {
    return false;
  }

  let telephoneNumberValidator = str.replace(/-| /g, "");

  if (telephoneNumberValidator.indexOf("(") < telephoneNumberValidator.indexOf(")")) {
    telephoneNumberValidator = telephoneNumberValidator.replace(/\(|\)/g, "");
  }

  if (telephoneNumberValidator.length === 10) {
    return true;
  } else if (telephoneNumberValidator.length === 11 && telephoneNumberValidator[0] === "1") {
    return true;
  }
  return false;
}

telephoneCheck("555-555-5555");
console.log(telephoneCheck("555-555-5555"));