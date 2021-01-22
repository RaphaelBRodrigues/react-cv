/**
 * Get the first item of a list
 * @module Utils
 * @param {Array} list Array list
 * @returns {Array} The first item of the list or an empty array
 */

function head(list: any[]) {
  if (!!list.length) {
    return list[0];
  }
  return [];
}

export default head;
