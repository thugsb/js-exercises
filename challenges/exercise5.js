/* 
⚠️
⚠️ See exercise5.md - this time you have to write your own tests! ⚠️
⚠️
*/

/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
export const sumMultiples = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  let total = 0;
  arr.forEach((num) => {
    if (num % 3 === 0 || num % 5 === 0) {
      total += num;
    }
  });
  return total;
};

/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
export const isValidDNA = (str) => {
  if (str === undefined) throw new Error("str is required");
  const cleanedString = str.toLowerCase().replace(/[^CGTA]/gi, "");
  // Remove the valid DNA characters 'CGTA' from the string, then check it's the same length
  if (str.length > 0 && str.length === cleanedString.length) {
    return true;
  }
  return false;
};

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
export const getComplementaryDNA = (str) => {
  if (str === undefined) throw new Error("str is required");
  if (isValidDNA(str)) {
    const aOthered = str.toUpperCase().replace(/[A]/gi, "B");
    const acOthered = aOthered.replace(/[C]/gi, "D");
    const acOgReplaced = acOthered.replace(/[G]/gi, "C");
    const acOgtReplaced = acOgReplaced.replace(/[T]/gi, "A");
    const aOcgtReplaced = acOgtReplaced.replace(/[D]/gi, "G");
    const acgtReplaced = aOcgtReplaced.replace(/[B]/gi, "T");
    console.log(acgtReplaced);
    return acgtReplaced;
  } else throw new Error("str isn't valid DNA");
};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
export const isItPrime = (n) => {
  if (n === undefined) throw new Error("n is required");
  for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
    if (n % i === 0) return false;
  }
  return n > 1;
};

/**
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
export const createMatrix = (n, fill) => {
  if (n === undefined) throw new Error("n is required");
  if (fill === undefined) throw new Error("fill is required");
  const output = [];
  const filler = [];
  for (let i = 0; i < n; i++) {
    filler.push(fill);
  }
  for (let i = 0; i < n; i++) {
    output.push(filler);
  }
  return output;
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
export const areWeCovered = (staff, day) => {
  if (staff === undefined) throw new Error("staff is required");
  if (day === undefined) throw new Error("day is required");
  let staffWorking = 0;
  staff.forEach((staff) => {
    if (staff.rota.indexOf(day) > -1) {
      staffWorking++;
    }
  });
  return staffWorking >= 3;
};
