export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  const smallNums = nums.filter((num) => {
    if (num < 1) {
      return num;
    }
  });
  return smallNums;
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // Your code here
  const regex = new RegExp(`^${char}`, "g");
  const matchingNames = names.filter((name) => {
    if (name.match(regex)) {
      return name;
    }
  });
  return matchingNames;
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here
  const regex = /^to\s/g;
  const verbs = words.filter((word) => {
    if (word.match(regex)) {
      return word;
    }
  });
  return verbs;
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  const integers = nums.filter((num) => {
    if (Number.isInteger(num)) {
      return num;
    }
  });
  return integers;
}

export function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
  const cities = users.map((user) => user.data.city.displayName);
  return cities;
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  const roots = nums.map((num) => Math.round(100 * Math.sqrt(num)) / 100);
  return roots;
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
  const regex = new RegExp(`${str}`, "gi");
  const matchingSentences = sentences.filter((sentence) => {
    if (sentence.match(regex)) {
      return sentence;
    }
  });
  return matchingSentences;
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
  const longestSides = triangles.map((triangle) => {
    const sortedTriangle = triangle.toSorted((a, b) => b - a);
    return sortedTriangle[0];
  });
  return longestSides;
}
