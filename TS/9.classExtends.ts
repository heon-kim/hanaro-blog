interface User {
  id: number;
  name: string;
}

const hong: User = { id: 1, name: "Hong" };
const kim: User = { id: 2, name: "Kim" };
const lee: User = { id: 3, name: "Lee" };
const users: User[] = [hong, lee, kim];

class ExtendedArray<T> extends Array<T> {
  mapBy(key: keyof T): any[] {
    return this.map((item) => item[key]);
  }

  findBy(key: keyof T, value: any): T[] {
    return this.filter((item) => item[key] == value);
  }

  rejectBy(key: keyof T, value: any): T[] {
    return this.filter((item) => item[key] != value);
  }

  sortBy(target: string): T[] {
    const [key, order] = target.split(":");
    return this.sort((a, b) => {
      if (a[key as keyof T] > b[key as keyof T])
        return order === "desc" ? -1 : 1;
      if (a[key as keyof T] < b[key as keyof T])
        return order === "desc" ? 1 : -1;
      return 0;
    });
  }
}

const extendedUsers = new ExtendedArray<User>();

extendedUsers.push(...users);

console.log(extendedUsers.mapBy("id"));
console.log(extendedUsers.mapBy("name"));

console.log(extendedUsers.findBy("id", 2));
console.log(extendedUsers.findBy("name", "Kim"));

console.log(extendedUsers.rejectBy("id", 2));

console.log(extendedUsers.sort((a, b) => a.name.localeCompare(b.name))); // 문자열 정렬

console.log(extendedUsers.sortBy("name:desc"));
