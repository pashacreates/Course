const arrObj = [];
for (let i = 0; i < 10; i++) {
  const obj = {
    number: i + 1,
    value: Math.round(Math.random() * 100),
  };
  arrObj.push(obj);
}
const arrObjCopy = arrObj.slice();
const arrSortByKey = function(arr, key) {
  arr.sort((a, b) => a[key] - b[key])
	return arr;
}
console.log(arrSortByKey(arrObjCopy,'value'));
console.log(arrObj);