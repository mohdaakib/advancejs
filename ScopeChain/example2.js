function saymyname(){
    var a='a';
    return function findmyname(){
        var b='b';
        return function printmyname(){
            var c='c';
            console.log(x);
            console.log("Aakib Ahmed");
        }
    }
}
var x='x';
saymyname()()();