class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    let length = nums.length;
    if (length === 0) {
        return false;
    } else {
        let m = Math.floor(length / 2);
        let y = nums[m];
        if (target === y) {
            return true;
        } else if (target < y) {
            return this.binarySearch(nums.slice(0, m), target);
        } else {
            return this.binarySearch(nums.slice(m + 1), target);
        }
    }
  }
}
// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;