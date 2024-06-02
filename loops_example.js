var num= 1;
while(num<10){
console.log(num);
num = num + 1;
}
console.log("while loop completed")
console.log("odd number from 1 to 20");

var num2 = 1;
while(num2<=20){
    console.log(num2);
    num2 = num2 + 2;

}
console.log("even number from 1 to 20");

var num3= 2;
while(num3<=30){
console.log(num3);
num3 = num3 + 2;
}
//++ in for loop is increment
console.log("print 1 to 10 using for loop");
for (var num4 = 1; num4 <= 10; num4++){
    console.log(num4);
}
console .log("print all the numbers in array using for each loop");
var arr1 = [4,7,12,10,15,20];
for(var num of arr1){
    console.log(num);
}
console.log("another way using for loop");
for(var i = 0; i < arr1.length;i++){
    console.log(arr1[i]);
}