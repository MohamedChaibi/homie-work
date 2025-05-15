function each(coll, func) {
    if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
        func(coll[i], i);
    }
    } else {
    for (var key in coll) {
        func(coll[key], key);
    }
    }
}

function map(coll, func) {
    var acc = [];
    if (!Array.isArray(coll)) {
    acc = {};
    }
    each(coll, function (element, key) {
    acc[key] = func(element, key);
    });
    return acc;
}

function filter(array, predicate) {
    var acc = [];
    each(array, function (element, index) {
      // notice we added the index here
    if (predicate(element, index)) {
        // notice we added the index here
        acc.push(element);
    }
    });
    return acc;
}


/*****************************  1  ***********************/
function addOne(array) {
return map(array, function(element) {
    return element + 1
})
}   


/*****************************  2  ***********************/
function removeEveryOther(array) {
    return filter (array ,function(element,i){
        return   (i%2===0)
})
}

 /*****************************  3  ***********************/
function doubleAll(nums) {
return map(nums, function(element) {
    return element * 2
})
}

function squareAll(nums) {
return map(nums, function(element) {
    return element * element
})
}

function stringLengths(array) {
return map(array, function(element) {
    return element.length
})
}

  /*****************************  4  ***********************/
function odds(nums) {
return filter (nums ,function(element,i){
        return   element%2!==0
})
}

function positives(nums){
return filter (nums ,function(element,i){
        return   element>0
    })
}

function positives(nums){
return filter (nums ,function(element,i){
        return   element<0
    })
}

function evenLength(nums) {
return filter (nums ,function(element,i){
        return  element.length%2===0
    })
}

function largerThanSix(nums) {
return filter (nums ,function(element,i){
        return   i.length>6
    })
}

  /*****************************  5 ***********************/

function map(coll, func) {
    var acc = [];
    if (!Array.isArray(coll)) {
    acc = {};
    }
    each(coll, function (element, key) {
    acc[key] = func(element, key);
    });
    return acc;
}

/*****************************  6***********************/
var students = [
{ name: "Alice", grade: 90, teacherNotes: "Excellent work", level: "A" },
{ name: "Bob", grade: 80, teacherNotes: "Good effort", level: "B" },
{ name: "Charlie", grade: 95, teacherNotes: "Impressive performance", level: "A+" },
{ name: "Dave", grade: 75, teacherNotes: "Needs improvement", level: "C" }
]

// 1-Using filter, create a new array that only contains students who have a grade higher than or equal to 90.
function gradeHigherThan(students) {
return filter (students  ,function(element){
    return   element.grade>=90
})
}

// 2-Using map, create a new array that contains the names of all the students in the given array of student objects.
function names (students ) {
return map(students , function(element) {
    return element.name 
})
}

// 3-Using filter, create a new array that only contains students who have a level of "A+".
function level (students) {
return filter (students  ,function(element){
    return   element.level==="A+"
})
}

// 4-Using map, create a new array that contains the grade of each student in the given array of student objects.
function names (students ) {
return map(students , function(element) {
    return  
})
}





















