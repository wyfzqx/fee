/**
 * 2016-05-12 22:15
 * Chapter 4.Working with Numbers and Math
 */

//Math Object:Does not have a constructor.All of the
//object's functionality, its properties and methods, are static
function introduction() {
  var x = 1.1;
  //Math.cell(x): Returns the smallest integer equal to or greater than x
  Math.cell(x);   //2
  //Math.floor(x): Returns the largest integer equal to or less than x
  Math.floor(x);  //1
  //Math.random(): [0, 1)
  Math.random();
  //Math.round(x): Rounds number to closest integer
  Math.round(x);  //1
}

//4.1(☆) Keeping an Incremental Counter
function num_4_1() {
  var globalCounter = 0;
  function nextTest() {
    globalCounter++;
    //...
  }
}

//4.2(☆☆) Converting a Decimal to a Hexademical value
function num_4_2() {
  var num = 255;
  //Use the Number object’s toString method:
  alert(num.toString(16));  //ff

  var octoNumber = 0255;  //177
  var hexaNumber = 0xad;  //177
}

//4.3(☆☆) Create a Random Number Generator
function num_4_3() {
  //Math.floor & Math.random
  //See also introduction
  var ran = Math.floor(Math.random() * 10 + 5);
}

//4.4(☆) Randomly Generate a Color
function num_4_4() {
  function ranNumber(val) {
    return Math.floor(Math.random() * val);
  }
  function ranColor_1() {
    return "rgb(" + ranNumber(256) + ", " + ranNumber(256) + ", " + ranNumber(256) + ")";
  }
  function ranColor_2() {
    // get red
    var r = ranNumber(255).toString(16);
    if (r.length < 2) r= "0" + r;
    // get green
    var g = ranNumber(255).toString(16);
    if (g.length < 2) g= "0" + g;
    // get blue
    var b = ranNumber(255).toString(16);
    if (b.length < 2) b= "0" + b;
    return "#" + r + g + b;
  }
}

//4.5(☆☆) Converting Strings in a Table to Numbers
function num_4_5() {
  var rows = document.getElementById("table1").children[0].rows;
  var numArray = new Array();
  for(var i = 0; i < rows.count(); i++) {
    numArray[numArray.length] = parseInt(rows[i].cell[1].firstChild.data);
  }

  var numString = "14.58 hectares";
  var numHectares = parseInt(numString); // returns 14
  var fltNum = parseFloat(numString); // returns 14.58
}

//4.6(☆☆☆) Summing All Numbers in a Table Column
function num_4_6() {
  var sum = 0;
  // use querySelector to find all second table cells
  var cells = document.querySelectorAll("td:nth-of-type(2)");
  //var cells = document.querySelectorAll("td + td");
  for(var i = 0; i < cells.length; i++) {
    sum += parseFloat(cells[i].firstChild.data);
  }
}

//4.7(☆) Converting Between Degrees and Radians
//角度与弧度的互相转化
function num_4_7() {
  var radians = degrees * (Math.PI / 180);
  var degrees = radians * (180 / Math.PI);
}

//4.8(☆☆☆☆) Finding the Radius and Center of a Circle
//to Fit Within a Page Element
function num_4_8() {
  function compStyle(elemId,property) {
    var elem = document.getElementById(elemId);
    var style;
    if(window.getComputedStyle)
      style = window.getComputedStyle(elem,null).getPropertyValue(property);
    else if(elem.currentStyle)
      style = elem.currentStyle[property];
    return style;
  }
  window.onload=function() {
    var height = parseInt(compStyle("elem","height"));
    var width = parseInt(compStyle("elem","width"));
    var x = width / 2;
    var y = height / 2;
    var circleRadius = Math.min(width,height) / 2;
  }
}

//4.9(☆) Calculating the Length of a Circlar Arc
function num_4_9() {
  // angle of arc is 120 degrees, radius of circle is 2
  var radians = degrees * (Math.PI / 180);
  var arc = radians * radius; // value is 4.18879020478...
}

//Summary:
//Math.cell();floor;random;round;PI
//Number.toString()
//querySelectorAll
//num_4_5 DOM表格操作
//num_4_8 浏览器兼容性

2016-05-17 10:31
