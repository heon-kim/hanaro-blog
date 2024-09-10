const promiseFn = (id = 1) =>
  new Promise((resolve, reject) => {
    console.log("id>>", id);
    if (id < 7) resolve(id + 1);
    else reject(new Error("어디로?" + id));
  });

promiseFn(1)
  .then((res) => {
    console.log("res1>>", res);
    promiseFn(res);
  })
  .then((res) => {
    if (!res) {
      reject(new Error("에러!"));
    }
    console.log("res2>>", res);
  })
  .catch((err) => console.log("Error!!>>", err));
