var c=[1,2,3,4,5];
//var d=c;

d.push(1876);

console.log(d);  //[ 1, 2, 3, 4, 5, 1876 ]
console.log(c);  //[ 1, 2, 3, 4, 5, 1876 ]

var d=[].concat(c);

console.log(d);  //[ 1, 2, 3, 4, 5, 1876 ]
console.log(c);  //[ 1, 2, 3, 4, 5, 1876 ]