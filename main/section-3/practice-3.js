'use strict';

module.exports =
    function createUpdatedCollection(collectionA, objectB) {
    var objArrA = countSameElements(collectionA);
    var collection= [];
    var arrB = objectB.value;//['a','b','c']
    for(var obj in objArrA){
        if(arrB.indexOf(objArrA[obj].key) >= 0){//是需要满三减一的行

            collection.push({
                key:objArrA[obj].key,
                count:objArrA[obj].count-Math.floor(objArrA[obj].count/3)
            })

        }else{
            collection.push({
                key:objArrA[obj].key,
                count:objArrA[obj].count
            })
        }
    }
    return collection;

    function countSameElements(collection) {
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
}
//
// const collectionA = [
//     'a', 'a', 'a',
//     'e', 'e', 'e', 'e', 'e', 'e', 'e',
//     'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h',
//     't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't',
//     'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f',
//     'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c',
//     'g', 'g', 'g', 'g', 'g', 'g', 'g',
//     'b', 'b', 'b', 'b', 'b', 'b',
//     'd', 'd', 'd', 'd', 'd'
// ];
//
//
// const objectB = {value: ['a', 'd', 'e', 'f']};
//
// console.log(createUpdatedCollection(collectionA, objectB));