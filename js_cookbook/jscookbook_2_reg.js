/**
 * 2016-05-10
 * Chapter 2.Using Regular Expressions
 * Regular Expression can be both a literal and an object
 */
function introduction() {
  //Regexp literal
  var re1 = /Shelley\s+Powers/;
  //正则表达式中'\'加大写字母或小写字母，所表达的含义正好相反，如：
  var re2_1 = /\d/;             //匹配一个数字字符
  var re2_2 = /\D/;             //匹配一个非数字字符
  //Regexp object
  var re3 = new RegExp("Shelley\s+Powers");
}

//2.1(☆☆) Testing Whether a Substring Exists
function reg_2_1() {
  var cookbookString = new Array();
  cookbookString[0] = "Joe's Cooking Book";
  cookbookString[1] = "Sam's Cookbook";
  cookbookString[2] = "JavaScript CookBook";
  cookbookString[3] = "JavaScript BookCook";
  //search pattern
  var pattern = /Cook.*Book/;

  var i = 0,
    len = cookbookString.length;
  //use RegExp test method
  for(; i < len; i++){
    alert(cookbookString[i] + " " + pattern.test(cookbookString[i]));
  }
  //1, 3 true; 2, 4 false
}

//2.2(☆☆☆) Testing for Case-Insensitive Substring Matches
function reg_2_2() {
  //use regular expression flag(i), ignores case
  var pattern1 = /Cook.*Book/i;
  var pattern2 = new RegExp("Cook.*Book", "i");
  //g:Global match:matches across entire string, rather than stopping at first match
  //m:Applies begin and end line special characters(^ and $, respectively) to each
  //  line in a multiline string
}

//2.3(☆☆) Validating a Social Security number
function reg_2_3() {
  var ssn = document.getElementById("pattern").value;
  var pattern = /\d{3}-?\d{2}-?\d{4}/;
  //use String match method
  //equal with pattern.test(ssn)
  if (ssn.match(pattern)) {
    alert("true");
  }else{
    alert("false");
  }
}

//2.4(☆☆☆☆) Finding and Highlighting All Instances Of a Pattern
//regexp exec method，即使在模式中设置了全局标志(g)，它每次也只会返回一个匹配项。其中：
//index: the index of the located match
//input: the original input string
//[0] or accessing array directly
//The matched value
//[1],...,[n]
//Parenthetical substring matches
function reg_2_4() {
  var searchString = "Now is the time and this is the time and that is the time";
  var pattern = /t\w*e/g;
  var matchArray = null,
    first = 0,
    last = 0;
  var resString = "";

  //use RegExp exec method
  while((matchArray = pattern.exec(searchString)) != null){
    last = matchArray.index;
    resString += searchString.substring(first, last);
    resString += "<span class=highlight>" + matchArray[0] + "</span>";
    first = pattern.lastIndex;
  }
  // finish off string
  resString = searchString.substring(first,searchString.length);

  //or use replace and '&$'
  resString = searchString.replace(pattern, "<span class=highlight>$&</span>");

  return resString;
}

//2.5(☆) Replacing Patterns with New Strings
//use String method replace
function reg_2_5() {
  var searchString = "Now is the time, this is the time";
  var re = /t\w{2}e/g;
  var replacement = searchString.replace(re, "place");
  alert(replacement);     //"Now is the place, this is the place";
}

//2.6(☆☆☆) Swap Words in a String Using Capturing Parentheses
function reg_2_6() {
  var name = "Abe Lincoln";
  var pattern = /^(\w+)\s(\w+)$/;
  var newName = name.replace(pattern, "$2, $1");
  //$$:Allows a literal dollar sign ($) in replacement
  //$&:Inserts matched substring
  //$` Inserts portion of string before match
  //$’ Inserts portion of string after match
  //$n Inserts nth captured parenthetical value when using RegExp
}

//2.7(☆) Using Regular Expressions to Trim Whitespace
//See Also str_1_10: Trimming Whitespace from the Ends of a String
function reg_2_7() {
  function leftTrim(str) { return str.replace(/^\s+/, ""); }
  function rightTrim(str) { return str.replace(/\s+$/, ""); }
}

//2.8(☆☆) Replace Html Tags with Named Entities
function reg_2_8() {
  var pieceOfHtml = "<p>This is a <span>paragraph</span></p>";
  pieceOfHtml = pieceOfHtml.replace(/</g, "&lt;");
  pieceOfHtml = pieceOfHtml.replace(/>/g, "&gt;");
}

//2.9(☆☆) Searching for Special Characters
function reg_2_9() {
  var re = /\\d/;
  var pattern = "\\d{4}";
  var str = "I want 1111 to find 3334 certain 5343 things 8484";
  var re2 = new RegExp(pattern, "g");
  var str2 = str.replace(re2, "****");
  alert(str2);  //"I want **** to find **** certain **** things ****"
  var pattern1 = pattern.replace(re, "\\D");
  var re3 = new RegExp(pattern1, "g");
  var str3 = str.replace(re3, "****");
  alert(str3);  //"****nt 1111******** 3334******** 5343********8484"
}

//2016-05-12 19:34
