function upperToLower(str) {
  const regexp = /[A-Z]/g;
  return str.replace(regexp, (match) => match.toLowerCase());
}

console.log(upperToLower("Senior Coding Learning JS"));

function telfmt(number) {
  if (number.length === 11) {
    return number.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
  } else if (number.length === 10) {
    return number.replace(/(\d{2,3})(\d{3,4})(\d{4})/, "$1-$2-$3");
  } else if (number.length === 7) {
    return number.replace(/(\d{3})(\d{4})/, "$1-$2");
  } else {
    return number; // 예상하지 못한 형식의 경우, 원본을 반환
  }
}
