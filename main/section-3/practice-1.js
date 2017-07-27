'use strict';
module.exports = function createUpdatedCollection(collectionA, objectB) {
      var collection= [];
      var arrB = objectB.value;//['a','b','c']
      for(var obj in collectionA){
      if(arrB.indexOf(collectionA[obj].key) >= 0){
          collection.push({
              key:collectionA[obj].key,
              count:collectionA[obj].count-1
          })

      }else{
        collection.push({
            key:collectionA[obj].key,
            count:collectionA[obj].count
        })
      }
    }
    return collection;
}
