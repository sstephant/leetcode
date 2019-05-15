/**
 * @param {number} a
 * @param {number} b
 */
const cmp2 = (a, b) => (a - b);

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
  if (nums.length < 3) return [];
  let [r, n, s, pa] = [[], nums.length - 1, nums.sort(cmp2), null];
  for (const [i, a] of s.entries()) {
    if (a > 0) break;
    if (a === pa) continue;
    let [start, end] = [i + 1, n];
    while (start < end) {
      const [b, c] = [s[start], s[end]];
      if (c < 0) break;
      const o = a + b + c;
      if (o === 0) {
        r.push([a, b, c]);
        while (s[++start] === b) ;
        while (s[--end] === c) ;
      } else if (o > 0) {
        --end;
      } else {
        ++start;
      }
      pa = a;
    }
  }
  return r;
};

describe('threeSum', () => {
  const fixture = [
    {
      nums: [0,0,0],
      expectedResult: [[0,0,0]],
    },
    {
      nums: [-1, 0, 1, 2, -1, -4],
      expectedResult: [[-1, -1, 2],[-1, 0, 1]],
    },
    {
      nums: [-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6],
      expectedResult: [[-4, -2, 6], [-4, 0, 4], [-4, 1, 3], [-4, 2, 2], [-2, -2, 4], [-2, 0, 2]],
    },
  ];
  fixture.forEach(({ nums, expectedResult }) => {
      it('it should find the set of all 3 sums', () => {
        const r = threeSum(nums);
        expect(r).to.be.an('array').that.deep.equals(expectedResult);
      }).timeout(10000);
    }
  )
});
