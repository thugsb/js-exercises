export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  const smallNums = [];
  nums.forEach((num) => {
    if (num < 1) {
      smallNums.push(num);
    }
  });
  return smallNums;
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // Your code here
  const matchingNames = [];
  const regex = new RegExp(`^${char}`, "g");
  names.forEach((name) => {
    if (name.match(regex)) {
      matchingNames.push(name);
    }
  });
  return matchingNames;
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here
  const verbs = [];
  const regex = /^to\s/g;
  words.forEach((word) => {
    if (word.match(regex)) {
      verbs.push(word);
    }
  });
  return verbs;
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  const integers = [];
  nums.forEach((num) => {
    if (Number.isInteger(num)) {
      integers.push(num);
    }
  });
  return integers;
}

export function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
  const cities = [];
  users.forEach((user) => {
    cities.push(user.data.city.displayName);
  });
  return cities;
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  const roots = [];
  nums.forEach((num) => {
    roots.push(Math.round(100 * Math.sqrt(num)) / 100);
    // I chose to use Math.round rather than toFixed because toFixed forces 2 decimal places, even where there's an integer or a number with 1 DP (e.g. 2.1)
  });
  return roots;
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
  const matchingSentences = [];
  const regex = new RegExp(`${str}`, "gi");
  sentences.forEach((sentence) => {
    if (sentence.match(regex)) {
      matchingSentences.push(sentence);
    }
  });
  return matchingSentences;
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
  const longestSides = [];
  triangles.forEach((triangle) => {
    const sortedTriangle = triangle.toSorted((a, b) => b - a);
    longestSides.push(sortedTriangle[0]);
  });
  return longestSides;
}
