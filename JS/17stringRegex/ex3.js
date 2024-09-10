const s = ["강원도 고성군", "고성군 토성면", "토성면 북면", "김1수"];
function searchByKoreanInitialSounds(arr, chosung) {
  const chosungCodes = chosung.split("").map((i) => i.charCodeAt(0));
  console.log(chosungCodes);
  const splited = arr.map((item) => item.split("").map((i) => i.charCodeAt(0)));
  console.log(splited);
}
searchByKoreanInitialSounds(s, "ㄱㅅㄱ");
