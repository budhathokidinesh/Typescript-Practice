interface User {
  email: string;
  id: number;
  startTrail(): string;
  getCoupon(couponname: string): number;
}
const hitesh: User = {
  email: "abc",
  id: 11,
  startTrail: () => {
    return "hahaha";
  },
  getCoupon: (name: "Dinesh") => {
    return 10;
  },
};
