let obj={
    a:'a',
    b:'b',
    c:'c'
}

// #method1

let clone =Object.assign({},obj);
clone.c=5;
console.log(clone); //{ a: 'a', b: 'b', c: 5 }
console.log(obj);   //{ a: 'a', b: 'b', c: 'c' }

// #method2
let clone2={...obj};
clone2.c=5;
console.log(clone2); //{ a: 'a', b: 'b', c: 5 }
console.log(obj);   //{ a: 'a', b: 'b', c: 'c' }

// method1 and method2 are doing shallow copy 
// In shallow copy the pointer points the same copy of object in class



// #method3

 obj={
    a:'a',
    b:'b',
    c:{
        deep:"try to copy me"
    }
}


let superclone=JSON.parse(JSON.stringify(obj));
console.log(superclone); //{ a: 'a', b: 'b', c: { deep: 'try to copy me' } }
console.log(obj);        //{ a: 'a', b: 'b', c: { deep: 'try to copy me' } }

// method3 is doing deep copy
// in deep copy it create copy of each object inside the class 
