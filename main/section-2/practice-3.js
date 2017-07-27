'use strict';

module.exports = function countSameElements(collection) {
    var objArr = [];
    var reg = /\[|\]|-|:/g;
    collection.map(function (elem) {
        for (var i = 0; i < objArr.length; i++) {
            if (elem.replace(reg, ",").split(",")[0] == objArr[i].name) {
                objArr[i].summary += elem.replace(reg, ",").split(",")[1] ? parseInt(elem.replace(reg, ",").split(",")[1]) : 1;
                return;
            }
        }
        //not in current objArr
        objArr[objArr.length] = {
            name: elem.replace(reg, ",").split(",")[0],
            summary: elem.replace(reg, ",").split(",")[1] ? parseInt(elem.replace(reg, ",").split(",")[1]) : 1
        }
    })
    return objArr;
}



