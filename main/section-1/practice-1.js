'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  var newCollection = collectionA.filter(function (elem,index,arr){
    return collectionB.indexOf(elem) >= 0;
  })
  return newCollection;
}
