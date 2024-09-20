class Vehicle {
  public move(distance: number): void {
    console.log(distance);
  }
}
class Car extends Vehicle {
  public move(distance: number): void {
    console.log(distance);
  }
}
class Plane extends Vehicle {
  public move(distance: number): void;
  public move(distance: number, speed: number): void;
  public move(distance: number, speed?: number): void {
    if (speed !== undefined) {
      console.log("speed정의안됨");
    } else {
      console.log(`Plane flew ${distance} meters`);
    }
  }
}
