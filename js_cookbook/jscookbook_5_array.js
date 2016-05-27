/**
 * 2016-05-25 08:40
 * Chapter 4.Working with Arrays and Loops
 */


function introduction() {
  //When you pass a variable containing an array literal to a function
  //it is passed by reference
  function chgArray(arr) {
    arr[0] = "surprise!";
  }
  var newLiteral = ["val1","val2"];
  chgArray(newLiteral);
  alert(newLiteral); // prints surprise!,val2

  //An Array can hold values of different data types
  var arrLiteral = [arrObject, "val2", 18, false]; // object, string, number, boolean
}

//5.1(☆) Looping Through an Array
function array_5_1() {
  var mammals = new Array("cat","dog","human","whale","seal");
  var animalString = "";
  for (var i = 0; i < mammals. length; i++) {
    animalString += mammals[i] + " ";
  }
  alert(animalString);
}

//5.2(☆) Creating a MultiDimensional Array
function array_5_2() {
  //create n * n array
  var n = 3;
  var arr = new Array(n);
  for(var i = 0; i < n; i++){
    arr[i] = new Array(n);
  }
}

//5.3(☆) Creating a String from an Array
function array_5_3() {
  //use Array join method
  var fruitArray = ['apple','peach','lemon','lime'];
  var resultString = fruitArray.join('-'); // apple-peach-lemon-lime
}

//5.4(☆☆) Sorting an Array
//排序函数会改变原数组
function array_5_4() {
  function comp(a, b) {
    return a - b;
  }
  var numArray = [13,2,31,4,5];
  alert(numArray.sort(comp));   //2,4,5,13,31
  alert(numArray.reverse());    //31,13,5,4,2
}

//5.5(☆☆☆) Store and Access Values in Order:Queue
function array_5_5() {
  var queue = new Array();
  // push on three entries
  queue.push("first");
  queue.push("second");
  queue.push("third");
  // shift two entries
  queue.shift();  // return first
  queue.shift();  // return second
}

//5.6(☆☆☆) Store and Access Values in Reverse Order:Stack
function array_5_6() {
  var stack = new Array();
  // push on three entries
  stack.push("first");
  stack.push("second");
  stack.push("third");
  //pop two entries
  stack.pop();  // return third
  stack.pop();  // return second
}

//5.7(☆☆) Create a New Array as a Subset of an Exsiting Array
function array_5_7() {
  var origArray = new Array(4);
  origArray[0] = new Array("one","two");
  origArray[1] = new Array("three","four");
  origArray[2] = new Array("five","six");
  origArray[3] = new Array("seven","eight");

  var newArray = origArray.slice(1, 3);
  alert(newArray);  // three,four,five,six
  //浅复制；只截取到3-1的位置
  //IE8不支持slice
}

//5.8(☆☆） Searching Through an Array
//Use ES5 Array method:indexOf and lastIndexOf
//thinking: How to write indexOf function
function array_5_8() {
  var animals = new Array("dog","cat","seal","walrus","lion", "cat");

  alert(animals.indexOf("cat"));        //1
  alert(animals.indexOf("cat", 2));     //5
  alert(animals.lastIndexOf("cat"));    //5
  alert(animals.lastIndexOf("cat", 4)); //1
}

//5.9(☆☆） Flatten a Multidimensional Array
//Use Array Object's concat Method
function arrar_5_9() {
  var origArray = new Array();
  origArray[0] = new Array("one","two");
  origArray[1] = new Array("three","four");
  origArray[2] = new Array("five","six");
  origArray[3] = new Array("seven","eight");
  // flatten array
  var newArray = origArray[0].concat(origArray[1],origArray[2],origArray[3]);
  alert(newArray[5]); // prints six
}

//5.10(☆☆） Search and Remove or Replace Array Elements
function arrar_5_10() {
  var charSets = new Array("ab","bb","cd","ab","cc","ab","dd","ab");
  // replace element
  while (charSets.indexOf("ab") != -1) {
  charSets.splice(charSets.indexOf("ab"),1,"**");
  }
  alert(charSets); // **,bb,cd,**,cc,dd,**
}




























 function paddingBottom() {

 }
