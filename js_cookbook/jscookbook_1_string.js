//1.1 Concatenating Two or More Strings
function str_1_1() {
  var str = "This " + "is " + "a " + "string";
  var nwString = "".concat("This ", "is ", "a ", "string");
}

//1.2 Concatenating a String and Another Data type
function str_1_2() {
  var b = true;
  var bString = "This is a " + b; //string:"This is a true";

  var strObject = new String("strObject");
  var strLiter = "strLiter";
  var strRes = strLiter + strObject;  //result is a string literal
}

//1.3 Conditionally Comparing Strings
function str_1_3() {
  //toLowerCase or toUpperCase
  var strName = prompt("What's your name?", "");
  if(strName.toLowerCase() == "lucy"){
    alert("Your name is Lucy! Good for you!");
  }else{
    alert("Your name isn't Lucy. Bummer.");
  }
  // == or !=, === or !==
  var strObject = new String("Lucy");
  var strLiteral = "Lucy";
  if(strObject == strLiteral){
    //true
  }
  if(strObject === strLiteral){
    //false!
  }
  //大写字母 > 小写字母
  "Cat" > "cat";  // true;

  //func:localeCompare:same->0, lexically greater->1, otherwise->-1
  "apple".localeCompare("grape"); //returns -1
}

//1.4 Finding a Substring in a String
function str_1_4() {
  var tstString = "This apple is my apple";
  //indexOf : left to right
  // start from 10
  // return 17, index of second
  var iValue = tstString.indexOf("apple", 10);
  //lastIndexOf : right to left
  tstString.lastIndexOf("apple"); // return value of 17
  tstString.lastIndexOf("apple", 12);// return value of 5
  tstString.lastIndexOf("apple", 3);  // return value of -1
}

//1.5 Extracting a Substring from a String
function str_1_5() {
  var sentence = "This is one sentence. This is a sentence with a list of items:cherries, oranges, apples, bananas.";
  var start = sentence.indexOf(":");
  var end = sentence.indexOf(".", start + 1);
  //func:substring(start, end);
  //func:substr(start, len);
  var list = sentence.substring(start + 1, end);
  //func:split
  var fruits = list.split(","); //array of values
}

//1.6 Checking for an Existing, Nonempty String
function str_1_6() {
  //true if variable exists, is a string, and has a length greater than zero.
  function testString(test) {
    if((typeof test != "undefined" && typeof test.valueOf() == "string")
      && test.length > 0){
          //1.the variable has been set;
          //2.it is a String Obeject or literal;
          //3.whether the length of the string is greater than zero.
    }
  }
}

//1.7 Breaking a Keyword String into Separate keywords
function str_1_7() {
  //use split method
  //the second parameter is a number representing a count of the number of splits to make
  //if the first parameter is "", it will split a string on every character
  var arrayList = keyword.split(",");
  //split method can also use a regular expression
  var sentence = "This is one sentence. This is a sentence with a list of items: cherries, oranges, apples, bananas.";
  var val = sentence.split(/:/);
  alert(val[1].split(/\./)[0]);
}

//1.8(☆) Inserting Special Characters
function str_1_8() {
  //use escape sequences with the backslash character(\)
  var newString = 'You can\'t use single quotes in a string surrounded by single quotes';
}

//1.9(☆) Processing Individual Lines of a textarea
function str_1_9() {
  //use split and escape sequences
  var txtBox = document.getElementById("inputBox");
  var lines = txtBox.value.split('\n');
}

//1.10(☆☆☆☆☆) Trimming Whitespace from the Ends of a String
//疑问：为什么在Function上扩充的方法，对String也有效？
//Fuction、String、Object之间的关系为何。
function str_1_10() {
  //扩充方法
  Function.prototype.method = function (name, func) {
    if(!this.prototype[name]){
      this.prototype[name] = func;
    }
    return this;
  };
  //扩充trim
  String.method('trim', function () {
    return this.replace(/^\s+|\s+$/g, "");
  });

  document.write('"' + "  neat  ".trim() + '"');
}

//1.11 Left- or Right-Padding a String
function str_1_11() {
  //padding with spaces
  var prefLineLength = 20;
  var oldStr = "This is a string";
  var diff = prefLineLength - oldStr.length;
  var filler = '&nbsp;';
  for (var i = 0; i < diff; i++) {
    oldStr = filler + oldStr;
  }
  document.getElementById("result").innerHTML = oldStr;
  //Sometimes,We need to padding value before display it
}
