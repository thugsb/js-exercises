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
  const fullBuses = Math.floor(people / 40);
  return people % 40 > 0 ? fullBuses + 1 : fullBuses;
}

export function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
  let target = "sheep";

  let counter = 0;
  for (const animal of arr) {
    if (animal == target) {
      counter++;
    }
  }

  return counter;
}

export function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
  return person.address.postCode.match(/^M[0-9]/g) ? true : false;
}
