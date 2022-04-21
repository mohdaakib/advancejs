var favtfood = 'grapes';
var foodthrough = function(){
    console.log('original favt foot:' + favtfood);

    var favtfood='sushi';
    console.log("new favt food :"+ favtfood);
}
foodthrough();



//CREATION PHASE for first Execution context
var favtfood=undefined;
var foodthrough=undefined;
favtfood = 'grapes';
var foodthrough = function(){
    console.log('original favt foot:' + favtfood);

    var favtfood='sushi';
    console.log("new favt food :"+ favtfood);
}
foodthrough();


//CREATION PHASE for SECOND Execution context
var favtfood=undefined;
var foodthrough=undefined;
favtfood = 'grapes';
var foodthrough = function(){
    var favtfood=undefined;
    console.log('original favt foot:' + favtfood);

    favtfood='sushi';
    console.log("new favt food :"+ favtfood);
}
foodthrough();