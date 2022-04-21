function callmeMaybe(){
    setTimeout(function(){
        console.log(callme);
    },4000);
    const callme="hii i am there";
}
callmeMaybe();