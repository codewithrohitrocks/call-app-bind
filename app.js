console.log("rohit");
var a = 12
function demo() {
    console.log("this is a demo");
}
demo()

console.log(b)
var b = 13
console.log(b)

var x = function y() {
    console.log("this is y")
}
console.log(x);

function demo() {
    var b = 10
    function demo1() {
        var c = 5
        console.log(a + b + c);
    }
    demo1()
}
demo()