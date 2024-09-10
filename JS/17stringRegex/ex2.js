function isEndJaum(str) {
  if (typeof str !== "string") return false;

  var lastLetter = str[str.length - 1];
  var uni = lastLetter.charCodeAt(0);

  if (uni < 44032 || uni > 55203) return false;

  return (uni - 44032) % 28 != 0;
}

function iga(str) {
  return isEndJaum(str) ? "이" : "가";
}
function eunun(str) {
  return isEndJaum(str) ? "은" : "는";
}
function eulul(str) {
  return isEndJaum(str) ? "을" : "를";
}

console.log(isEndJaum("강원도"));
console.log(isEndJaum("바라당"));
console.log(isEndJaum("ㅜㅜ"));
console.log(isEndJaum("케 "));
console.log(isEndJaum("점수A"));
console.log(isEndJaum("24"));

console.log(`고성군${iga("고성군")}`);
console.log(`고성군${eunun("고성군")}`);
console.log(`고성군${eulul("고성군")}`);
