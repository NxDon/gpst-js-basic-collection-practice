'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
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
            var reg = /\[|\]|-|:/g;
            collection.map(function (elem) {
                for (var i = 0; i < objArr.length; i++) {
                    if (elem.replace(reg, ",").split(",")[0] == objArr[i].key) {
                        objArr[i].count += elem.replace(reg, ",").split(",")[1] ? parseInt(elem.replace(reg, ",").split(",")[1]) : 1;
                        return;
                    }
                }
                //not in current objArr
                objArr[objArr.length] = {
                    key: elem.replace(reg, ",").split(",")[0],
                    count: elem.replace(reg, ",").split(",")[1] ? parseInt(elem.replace(reg, ",").split(",")[1]) : 1
                }
            })

            return objArr;
        }
    }
