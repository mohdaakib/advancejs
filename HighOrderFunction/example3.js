var radius=[3,4,5,6];

const area=function(radius){
    return Math.PI*radius*radius;
};
const circumference=function(radius){
    return 2*Math.PI*radius;
};
const Diameter=function(radius){
    return 2*radius;
};



const calculate=function(radius,logic){
    var output=[];
    for(let i=0;i<radius.length;i++){
        output.push(logic(radius[i]));
    }
    return output;
}
console.log(calculate(radius,area));
console.log(calculate(radius,circumference));
console.log(calculate(radius,Diameter));