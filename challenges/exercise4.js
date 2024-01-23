export const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  let next = null;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === n) {
      next = nums[i + 1];
      i = nums.length;
    }
  }
  return next;
};

export const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  const obj = { 1: 0, 0: 0 };
  const count = (str, substr) => {
    const re = new RegExp(`${substr}`, "g");
    return ((str || "").match(re) || []).length;
  };
  obj[1] = count(str, 1);
  obj[0] = count(str, 0);
  return obj;
};

export const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  const arrayOfNums = String(n).split("").reverse();
  return Number(arrayOfNums.join(""));
};

export const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
  let total = 0;
  arrs.forEach((arr) => {
    arr.forEach((num) => (total += num));
  });
  return total;
};

export const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
  let output = [];
  if (arr.length > 1) {
    const first = arr.shift();
    const last = arr.pop();
    output.push(last);
    if (arr.length > 0) {
      output = output.concat(arr);
    }
    output.push(first);
  } else {
    output = arr;
  }
  return output;
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
  let found = false;
  for (let key in haystack) {
    const regex = new RegExp(`${searchTerm}`, "gi");
    if (typeof haystack[key] === "string") {
      if (haystack[key].match(regex)) {
        found = true;
      }
    }
  }
  return found;
};

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  const output = {};
  const cleanedString = str.toLowerCase().replace(/[^a-zA-Z ]/g, "");
  const arrayOfWords = cleanedString.split(" ");
  arrayOfWords.forEach((word) => {
    if (Object.hasOwn(output, word)) {
      output[word]++;
    } else {
      output[word] = 1;
    }
  });
  return output;
};
