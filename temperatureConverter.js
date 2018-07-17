function convertToFfromC(temp) {
  temp = (temp - 32) * (5 / 9);
  return temp;
}
function convertToCfromF(temp) {
  temp = temp * (9 / 5) + 32;
  return temp;
}

module.exports = {
  convertToFfromC,
  convertToCfromF,
};
