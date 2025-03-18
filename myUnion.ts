let score: number | string = 33;
score = 44;
score = "55";

type User = {
  name: string;
  id: number;
};
type Admin = {
  userName: string;
  id: number;
};
let dinesh: User | Admin = { name: "Dinesh", id: 123 };
dinesh = { userName: "hc", id: 334 };
const data: number[] = [1, 2, 3];
const data1: string[] = ["1", "2", "3"];
const data2: (string | number | boolean)[] = ["1", "2", 3, true];
