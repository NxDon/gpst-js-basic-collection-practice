'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
   var collectionB = objectB.value;
   collectionA = collectionA.map(function (elem) {return elem.key})
    var newCollection = collectionA.filter(function (elem,index,arr){
        return collectionB.indexOf(elem) >= 0;
    })
    return newCollection;
}
