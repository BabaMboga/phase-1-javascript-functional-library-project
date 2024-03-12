// Collection Functions (Array or Objects)
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else {
      const keys = Object.keys(collection);
      for (const key of keys) {
        callback(collection[key]);
      }
    }
    return collection;
  }
  
  function myMap(collection, callback) {
    const result = [];
    myEach(collection, function(item, key) {
      result.push(callback(item, key));
    });
    return result;
  }
  
  function myReduce(collection, callback, acc) {
    let startIdx = 0;
    if (typeof acc === 'undefined') {
      acc = collection[0];
      startIdx = 1;
    }
    myEach(collection, function(item, key) {
      if (startIdx === 0 || key !== 0) {
        acc = callback(acc, item, collection);
      }
    });
    return acc;
  }

  function myFind(collection,predicate) {
    let result;
    myEach(collection, function(item, key) {
        if (predicate(item)) {
            result = item;
            return false; // break the loop
        }
    });
    return result;
  }

  function myFilter(collection, predicate) {
    const result = [];
    myEach(collection, function(item, key) {
        if (predicate(item)) {
            result.push(item);
        }
    });
    return result;
  }

  function mySize(collection) {
    if(Array.isArray(collection)) {
        return collection.length;
    } else {
        return Object.keys(collection).length;
    }
  }

  //Array Functions
  function myFirst(array, n) {
    if (typeof n === 'undefined') {
        return array[0];
    } else {
        return array.slice(0, n);
    }
  }

  function myLast(array, n) {
    if (typeof n === 'undefined') {
        return array[array.legnth - 1];
    } else {
        return array.slice(Math.max(array.length - n, 0));
    }
  }

  // BONUS functions
  function mySortBy(array, callback) {
    return array.slice().sort((a, b) => {
        const aValue = callback(a);
        const bValue = callback(b);
        return aValue > bValue ? -1 : aValue > bValue ? 1 : 0;
    });
  }

  function myFlatten(array, shallow = false, newArr = []) {
    myEach(array, function(item) {
        if (Array.isArray(item) && !shallow) {
            myFlatten(item, false, newArr);
        } else {
            newArr.push(item) ;

        }
    });

    return newArr
  }

  //Object Functions
  function myKeys(object) {
    return myMap(object, ( key) => key);
  }

  function myValues(object) {
    return myMap(object, (value) => value);
  }