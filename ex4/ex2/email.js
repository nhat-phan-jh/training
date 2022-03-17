const checkEmail = (email) => {
  if (email) {
    var regularE = /^(([a-zA-Z0-9]+)([\.-_]?)([a-zA-Z0-9]+))+@[a-z]+\.[a-z]{2,4}$/;
    return regularE.test(email);
  }
};
console.log(checkEmail("nha_t1.phan@journeyh.io"));
