function trackObjects(commands) {
  const wm = new WeakMap();
  const m = new Map();
  let tempMap = new Map();

  const weakMapResults = [];
  const mapResults = [];

  const fns = {
    addWeakMap: function (objID, value) {
      // WeakMap에 objID라는 키를 가진 객체를 추가하고, 해당 객체의 값을 value로 설정
      const obj = { id: objID };
      wm.set(obj, value);
      tempMap.set(objID, obj);
      console.log("addWeakMap", wm);
    },
    addMap: function (objID, value) {
      // Map에 objID라는 키를 가진 객체를 추가하고, 해당 객체의 값을 value로 설정
      const obj = { id: objID };
      m.set(obj, value);
      tempMap.set(objID, obj);
      console.log("addMap", m);
    },
    modify: function (objID, newID) {
      // 기존 objID 객체의 id 값을 newID로 수정
      // 이 명령어는 Map과 WeakMap 모두에 영향을 미쳐야 합니다.
      if (tempMap.has(objID)) {
        const oldMapValue = tempMap.get(objID);
        oldMapValue.id = newID;
        tempMap.set(newID, oldMapValue); // 새 ID로 객체를 갱신
        tempMap.delete(objID); // 이전 ID로 매핑된 객체 삭제
      }
      console.log("modify", wm, m);
    },
    checkWeakMap: function (objID) {
      // WeakMap에 objID가 존재하는지 확인하고, 결과를 반환
      const obj = tempMap.get(objID);
      weakMapResults.push(wm.has(obj));
    },
    checkMap: function (objID) {
      // Map에 objID가 존재하는지 확인하고, 결과를 반환
      const obj = tempMap.get(objID);
      mapResults.push(m.has(obj));
    },
  };

  commands.forEach((command) => {
    const [fn, ...args] = command.split(" ");
    fns[fn](...args);
  });

  return { weakMapResults, mapResults };
}

const commands = [
  "addWeakMap 1 100",
  "addMap 1 100",
  "addWeakMap 2 200",
  "addMap 2 200",
  "modify 1 10",
  "checkWeakMap 1",
  "checkWeakMap 10",
  "checkMap 1",
  "checkMap 10",
];

console.log(trackObjects(commands));
