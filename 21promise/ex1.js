function depthTimer(depth) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`depth${depth}`, new Date());
      if (depth === 3) {
        reject(new Error("Already 3-depth!!"));
      } else {
        resolve(depth + 1);
      }
    }, depth * 1000);
  });
}

depthTimer(1)
  .then(depthTimer)
  .then(depthTimer)
  .catch((err) => console.error("Error:", err));
