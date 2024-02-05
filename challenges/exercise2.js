export function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  // Your code here!
  nums.forEach((num, i, nums) => (nums[i] = num * num));
  return nums;
}

export function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Your code here!
  let ans = "";
  for (let i = 0; i < words.length; i++) {
    const lower = words[i].toLowerCase();
    if (i === 0) {
      ans += lower;
    } else {
      ans += words[i].slice(0, 1).toUpperCase();
      ans += words[i].slice(1).toLowerCase();
    }
  }
  return ans;
}

export function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
  const subjects = [];
  people.forEach((person) => {
    person.subjects.forEach((subject) => subjects.push(subject));
  });
  return subjects.length;
}

export function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
  const totalIngredients = [];
  menu.forEach((dish) => {
    dish.ingredients.forEach((ingredient) => totalIngredients.push(ingredient));
  });
  return totalIngredients.includes(ingredient);
}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
  const duplicates = arr2.filter((num) => arr1.includes(num));
  return Array.from(new Set(duplicates.sort((a, b) => a - b)));
}
