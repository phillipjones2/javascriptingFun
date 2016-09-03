function search (something) {
  if (typeof(something) === 'number' || typeof(something) === 'string' ) {
    return 'value'
  } else if (Array.isArray(something)){
    return 'array'
  } else if (typeof(something) === 'object' ){
    return 'object'
  } else {
    return
  }
}

var foundValue = []

function searchObj (obj, value, propName) {
    var propTypes = []
    var whatType
    for (var prop in obj) {
        if (propName){
            nestedProp = propName + "." + prop
        } else {
            nestedProp = prop
        }
        whatType = findType(obj[prop])

        if(whatType === 'value'){
            if (obj[prop] === value) {
                if (propName){
                    foundValue.push(nestedProp)
                } else {
                   foundValue.push(prop)
                }
            }
        } else if (whatType === 'array') {
            var searchResults = searchArray(obj[prop],value,nestedProp)
            if (searchResults.length > 0){
                for (var i = 0; i < searchResults.length; i +=1){
                    foundValue.push(searchResults[i])
                }
            }
        } else if (whatType === 'object') {
            if (propName) {
                nestedProp = propName + "." + prop
            } else {
                nestedProp = prop
            }
            searchObj(obj[prop],value, nestedProp)
        }
    }
    return foundValue
}

function searchArray (arr, value,propName) {
    var finds = []
    var whatType
    for (var i = 0; i < arr.length; i += 1) {
      var nestedProp = propName + '[' + i + ']'
      whatType = findType(arr[i])
      console.log(whatType);
      console.log(i);
      if (whatType === 'value') {
        if( arr[i] === value){
            finds.push(nestedProp)
        }
      } else if (whatType === 'array') {
        searchArray(arr[i],value, nestedProp)
      } else if (whatType === 'object') {
        searchObj(arr[i], value, nestedProp)
      }
    }
    return finds
}

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


var testObj =   {
                    a: 1,
                    b: "f",
                    c: [],
                    d: function (s) {return s},
                    e: {
                        h: 1,
                        i: [1,2,3,[1]]
                    },
                    f: 1,
                    g: [3,2,1],
                    j: {
                            k:1,
                            l:[2,3,4,5,6,1],
                            m:1,
                            n:  {
                                    o:1,
                                    p:  {
                                            q:1
                                        }
                                }
                        }

                }
var testObj1 =  {
                    a: 1
                }
var arr = ['a']
console.log(searchObj(testObj,1))
