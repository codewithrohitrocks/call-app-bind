// call apply bind
const student = {name:"rohit",age:23,class1:"bsc" }
function getinfo (add,pin){
    console.log(`the name is ${this.name} and the age is ${this.age} and the class is ${this.class1} the add ${add} the pin ${pin}`);
}
const student1 = {name:"vaibhav",age:25,class1:"bsc"}
getinfo.call(student1,"miraj",4144)
getinfo.call(student,"kupwad",41415)

// apply method
getinfo.apply(student,["miraj",4144])

// bind
 const myfunction = getinfo.bind({name:"ajay",age:12,class1:"btech"},"miraj",4144) 
 console.log(myfunction); 
 myfunction()