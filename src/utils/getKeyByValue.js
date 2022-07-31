export default function getKeyByValue(object, value) {
    // console.log("getKeyByValue", object, value)
    return Object.keys(object).find(key => object[key] === value);
  }