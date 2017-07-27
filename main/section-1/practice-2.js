'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
    var collectionA1 = collectionA.join(",").split(",");
    var collectionB1 = collectionB.join(",").split(",");
    var newCollection = collectionA1.filter(function (elem,index,arr){
        return collectionB1.indexOf(elem) >= 0;
    })
    return newCollection;
}
