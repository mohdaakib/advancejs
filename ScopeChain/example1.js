var x='x';
function findmyname(){
    console.log(x);
    var b='b'; //it store in  variable environment for findmyname execution context
    return printmyname();
}
function printmyname(){
    var c='c'; //it store in  variable environment for printmyname execution context
    console.log("Aakib Ahmed");
}
function saymyname(){
    var a='a'; //it store in  variable environment for saymyname execution context
    return findmyname();
}
saymyname();