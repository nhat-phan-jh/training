const checkPassword = (password) => {
  if (password) {
    var regularE = /^(?=.+[A-Z])(?=.+[!])(?=.+[a-z])(?=.+\d)[A-Za-z\d]{8,}$/;
    return regularE.test(password);
  }
};
console.log(checkPassword("a545as4dsAAAA"));
