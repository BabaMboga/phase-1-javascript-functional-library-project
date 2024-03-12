// Collection Functions (Array or Objects)
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
        for (let i=0; i < collection.length; i++) {
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

