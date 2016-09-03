function findType (something) {
  if (typeof(something) === 'number' || typeof(something) === 'string' ) {
    return 'value'
  } else if (Array.isArray(something)){
    return 'array'
  } else if (typeof(something) === 'object' ){
    return 'object'
  } else {
    return 'function'
  }
}

console.log(findType(1) === 'value');
console.log(findType('string') === 'value');
console.log(findType([1,2,3]) === 'array');
console.log(findType({a:1}) === 'object');
console.log(findType(() => {console.log('haggy')}) === 'function');
