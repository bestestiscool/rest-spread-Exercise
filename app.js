const filterOutOdds = (...nums) => nums.filter(nums >= nums % 2===0)
const findMin = (...nums)=> Math.min(...nums);
const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})
const doubleAndReturnArgs = (arr, ... AddArrTimesTwo) => [...arr,  ...args.map(v => v *2)]
const removeRandom = items => {
    let idx = Math.floor(Math.random() * items.length);
    items.shift(idx);
    return items;
  }
const extend = (array1, array2) => {
  return [...array1, ...array2];
}
const addKeyVal = (obj, key, val) => {
  let copyObj = { ...obj }
  copyObj[key] = val;
  return copyObj;
}
const removeKey = (obj, key) => {
    let newObj = { ...obj }
    delete newObj[key]
    return newObj;
}
const combine = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
  }
const update = (obj, key, val) => {
  let newObj = { ...obj }
  newObj[key] = val;
  return newObj;
}