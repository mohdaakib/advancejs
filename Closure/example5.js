const array=[1,2,3,4];

for(var i=0;i<array.length;i++){
    setTimeout(function (){
        console.log('i am at index'+ i);
    }
    ,3000);
}
/* output
i am index 4  
i am index 4  
i am index 4  
i am index 4  

first methos if we change var to const the output will be same as we desire */

// #SecondMethod

for(var i=0;i<array.length;i++){
    (function(closureI){
        setTimeout(function(){
            console.log('i am at index'+ closureI)
        },3000)
    })(i)
}