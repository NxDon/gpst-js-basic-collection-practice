'use strict';

module.exports = function countSameElements(collection) {
    var objArr = [];
    collection.map(function (elem){
        for(var i = 0; i < objArr.length; i++){
          if(elem == objArr[i].key){
              objArr[i].count += 1;
              return;
          }
        }
        objArr[objArr.length]= {
            key:elem,
            count:1
        }
    })
    return objArr;
}
