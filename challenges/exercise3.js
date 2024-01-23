export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  const smallNums = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 1) {
      smallNums.push(nums[i]);
    }
  }
  return smallNums;
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // Your code here
  const matchingNames = [];
  const regex = new RegExp(`^${char}`, "g");
  for (let i = 0; i < names.length; i++) {
    if (names[i].match(regex)) {
      matchingNames.push(names[i]);
    }
  }
  return matchingNames;
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here
  const verbs = [];
  const regex = /^to\s/g;
  for (let i = 0; i < words.length; i++) {
    if (words[i].match(regex)) {
      verbs.push(words[i]);
    }
  }
  return verbs;
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  const integers = [];
  for (let i = 0; i < nums.length; i++) {
    if (Number.isInteger(nums[i])) {
      integers.push(nums[i]);
    }
  }
  return integers;
}

export function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
  const cities = [];
  for (let i = 0; i < users.length; i++) {
    cities.push(users[i].data.city.displayName);
  }
  return cities;
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  const roots = [];
  for (let i = 0; i < nums.length; i++) {
    roots.push(Math.round(100 * Math.sqrt(nums[i])) / 100);
    // I chose to use Math.round rather than toFixed because toFixed forces 2 decimal places, even where there's an integer or a number with 1 DP (e.g. 2.1)
  }
  return roots;
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
  const matchingSentences = [];
  const regex = new RegExp(`${str}`, "gi");
  for (let i = 0; i < sentences.length; i++) {
    if (sentences[i].match(regex)) {
      matchingSentences.push(sentences[i]);
    }
  }
  return matchingSentences;
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
  const longestSides = [];
  for (let i = 0; i < triangles.length; i++) {
    const sortedTriangle = triangles[i].toSorted((a, b) => b - a);
    longestSides.push(sortedTriangle[0]);
  }
  return longestSides;
}
