const {
  deleteDuplicates,
  deleteNestedDuplicates,
  containsValue,
} = require('./deleting_duplicates');

describe('deleteDuplicates function', () => {
  it("returns an array of values that doesn't contain a duplicate, from an array containing one duplicate", () => {
    expect(deleteDuplicates([1, 2, 3, 1])).toEqual([1, 2, 3]);
  });
  it('returns an array without duplicates from an input with multiples duplicates', () => {
    expect(deleteDuplicates([1, 2, 'hi', 3, 1, 'hi', 'hi'])).toEqual([
      1,
      2,
      'hi',
      3,
    ]);
  });
  it("doesn't mutate the original input array", () => {
    const originalArr = [1, 2, 3, 1];
    deleteDuplicates(originalArr);
    expect(originalArr).toEqual([1, 2, 3, 1]);
  });
  it('when given an empty array, it returns an empty array', () => {
    expect(deleteDuplicates([])).toEqual([]);
  });
});

describe('containsValue', () => {
  it('returns true if a value already exists within an unnested array', () => {
    expect(containsValue([1, 2, 3], 2)).toBe(true);
  });
  it("returns false if a value doesn't exist within an unnested array", () => {
    expect(containsValue([1, 2, 3], 4)).toBe(false);
  });
  it('returns true if a given value exists within a nested array one layer deep', () => {
    expect(containsValue([1, 2, 3, [4]], 4)).toBe(true);
  });
  it('returns false if a given value does not exist within a nested array', () => {
    expect(containsValue([1, 2, 3, [4], 4])).toBe(false);
  });
  it('returns the correct boolean to describe whether a given value is contained within a nested array 2 layers deep', () => {
    expect(containsValue([1, [2, 3, [4]]], 4)).toBe(true);
    expect(containsValue([1, [2, 3, [4]]], 5)).toBe(false);
  });
});

describe.only('deleteNestedDuplicates', () => {
  it('can delete a duplicate from an array containing one nested value', () => {
    expect(deleteNestedDuplicates([1, 2, [3, 4]])).toEqual([1, 2, [3]]);
    // expect(deleteNestedDuplicates([1, 2, [3, 1]])).toEqual([1, 2, [3]]);
  });
});
