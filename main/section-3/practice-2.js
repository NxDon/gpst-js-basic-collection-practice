'use strict';
module.exports =
    function createUpdatedCollection(collectionA, objectB) {
    var collection= [];
    var arrB = objectB.value;//['a','b','c']
    for(var obj in collectionA){
        if(arrB.indexOf(collectionA[obj].key) >= 0){//是需要满三减一的行

            collection.push({
                key:collectionA[obj].key,
                count:collectionA[obj].count-Math.floor(collectionA[obj].count/3)
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
//
// const collectionA = [
//     {key: 'a', count: 3},
//     {key: 'e', count: 7},
//     {key: 'h', count: 11},
//     {key: 't', count: 20},
//     {key: 'f', count: 9},
//     {key: 'c', count: 8},
//     {key: 'g', count: 7},
//     {key: 'b', count: 6},
//     {key: 'd', count: 5}
// ];
//
// const objectB = {value: ['a', 'd', 'e', 'f']};
//
// console.log(createUpdatedCollection(collectionA,objectB))