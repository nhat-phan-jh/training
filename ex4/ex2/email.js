const checkEmail = (email) => {
  if (email) {
    var regularE =
      /^([_]?)(([a-zA-Z0-9]+)([\.-_]?)([a-zA-Z0-9]+))+@[a-z]+\.[a-z]+$/;
    return regularE.test(email);
  }
};
console.log(checkEmail("_nha_t1.phan@journeyh.infafsfafor"));
