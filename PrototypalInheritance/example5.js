let human={
    moral:true
}

let socrets=Object.create(human);
socrets.age=45;
console.log(socrets.moral + socrets.age);




//ONLY FUNCTION HAVE THE PROTOTYPE PROPERTY

const obj={};
obj.prototype; //undefined

const arr=[];
arr.prototype; //undefined

function check(){

}
check.prototype // it will give Object.prototype
