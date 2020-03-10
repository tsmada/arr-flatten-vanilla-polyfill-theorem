function flatten(inputArr) {
  let newArray = inputArr.reduce((acc, item) => {
    if (Array.isArray(item)) {
      acc = acc.concat(flatten(item))
    } else {
      acc.push(item)
    }
    return acc;
  }, [])
  return newArray
}
