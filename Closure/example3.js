/* Closure 
1. memory efficient
2. encapsulation */

// # MemoryEfficent

function heavyDuty(index){
    const bigarray= new Array(7000).fill('a');
    console.log('created');
    return console.log(bigarray[index]);
}
heavyDuty(688);
heavyDuty(688);
heavyDuty(688);

const getheavyDuty= heavyDuty2();

getheavyDuty(688);
getheavyDuty(700);
getheavyDuty(800);


function heavyDuty2(){
    const bigArray= new Array(7000).fill('a');
    console.log('created Again!');
    return function(index){
        return console.log(bigArray[index]);
    }
}