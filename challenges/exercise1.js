export function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  // Your code here!
  return sandwich.fillings;
}

export function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
  return person.city === "Manchester" ? true : false;
}

export function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
  const BUS_CAPACITY = 40;
  const fullBuses = Math.floor(people / BUS_CAPACITY);
  return people % 40 > 0 ? fullBuses + 1 : fullBuses;
}

export function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
  return arr.filter((animal) => animal.toUpperCase() === "SHEEP").length;
}

export function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
  return /^M[0-9]/g.test(person.address.postCode);
  // return person.address.postCode.match(/^M[0-9]/g) ? true : false;
}
