const WEEKS = "일월화수목금토".split("");

const calendar = (dateStr) => {
  const [year, month] = dateStr.split("-");
  const d = new Date(year, Number(month) - 1, 1);
  let outStr = "   ".repeat(d.getDay());
  for (let i = 0; i < 30; i += 1) {
    outStr += d.getDate().toString().padStart(3);
    if (d.getDay() === 6) outStr += "\n";
    d.setDate(d.getDate() + 1);
  }

  return outStr;
};

console.log(calendar("2020-07"));
